import {
  GetVideoPopularListRequestParams,
  GetVideoPopularListResponse,
} from "@/src/features/main/api/getVideosPopularList";
import { youtubeServerInstance } from "@/src/shared/api/youtube/server/instance";
import { formatKoreanTextCompareDatesFromNow } from "@/src/shared/utils/format/date";
import { formatNumberToKoreanText } from "@/src/shared/utils/format/number";
import { youtube_v3 } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

//  Params validation 생략
export const GET = async (request: NextRequest) => {
  try {
    const queryParams = request.nextUrl.searchParams;

    const { data } = await youtubeServerInstance.videos.list({
      part: ["snippet", "statistics"],
      chart: "mostPopular",
      regionCode: "KR",
      ...parseQueryParams(queryParams),
    });

    const response = mappingResponse(data);

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
  }
};

const parseQueryParams = (
  params: URLSearchParams,
): GetVideoPopularListRequestParams => {
  return {
    maxResults: Number(params.get("maxResults") ?? "10"),
    pageToken: params.get("pageToken") ?? undefined,
  };
};

const mappingResponse = (
  data: youtube_v3.Schema$VideoListResponse,
): GetVideoPopularListResponse => {
  const lists =
    data.items?.map(({ id, snippet, statistics }) => {
      const publishedAt = snippet?.publishedAt ?? "";
      const parseViewCount = parseInt(statistics?.viewCount ?? "0");

      return {
        videoId: id ?? "",
        title: snippet?.title ?? "",
        description: snippet?.description ?? "",
        channelId: snippet?.channelId ?? "",
        channelTitle: snippet?.channelTitle ?? "",
        thumbnail: {
          url: snippet?.thumbnails?.default?.url ?? "",
        },
        publishedAt,
        publishedAtDisplayText:
          formatKoreanTextCompareDatesFromNow(publishedAt),
        viewCount: parseViewCount,
        viewCountDisplayText: formatNumberToKoreanText(parseViewCount, true),
      };
    }) ?? [];
  return {
    lists,
    prevPageToken: data.prevPageToken ?? undefined,
    nextPageToken: data.nextPageToken ?? undefined,
    totalResults: data.pageInfo?.totalResults ?? 0,
  };
};
