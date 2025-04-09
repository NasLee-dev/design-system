import {
  GetSearchVideosListRequestParams,
  GetSearchVideosListResponse,
  SearchOrder,
} from "@/src/features/search/api/getSearchVideosList";
import { youtubeServerInstance } from "@/src/shared/api/youtube/server/instance";
import { formatKoreanTextCompareDatesFromNow } from "@/src/shared/utils/format/date";
import { youtube_v3 } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const queryParams = request.nextUrl.searchParams;

    const { data } = await youtubeServerInstance.search.list({
      part: ["snippet"],
      type: ["video"],
      regionCode: "KR",
      maxResults: 20,
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
): GetSearchVideosListRequestParams => {
  return {
    q: params.get("q") ?? "",
    pageToken: params.get("pageToken") ?? undefined,
    order: (params.get("order") ?? "relevance") as SearchOrder,
  };
};

const mappingResponse = (
  data: youtube_v3.Schema$SearchListResponse,
): GetSearchVideosListResponse => {
  const lists =
    data.items?.map(({ id, snippet }) => {
      const publishedAt = snippet?.publishedAt ?? "";

      return {
        videoId: id?.videoId ?? "",
        title: snippet?.title ?? "",
        description: snippet?.description ?? "",
        channelId: snippet?.channelId ?? "",
        channelTitle: snippet?.channelTitle ?? "",
        thumbnail: {
          url: snippet?.thumbnails?.default?.url ?? "",
          width: snippet?.thumbnails?.medium?.width ?? undefined,
          height: snippet?.thumbnails?.medium?.height ?? undefined,
        },
        publishedAt,
        publishedAtDisplayText:
          formatKoreanTextCompareDatesFromNow(publishedAt),
      };
    }) ?? [];
  return {
    lists,
    prevPageToken: data.prevPageToken ?? undefined,
    nextPageToken: data.nextPageToken ?? undefined,
    totalResults: data.pageInfo?.totalResults ?? 0,
  };
};
