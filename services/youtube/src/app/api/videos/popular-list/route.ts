import { GetVideoPopularListRequestParams } from "@/src/features/main/api/getVideosPopularList";
import { youtubeServerInstance } from "@/src/shared/api/youtube/server/instance";
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

    return NextResponse.json({
      data,
    });
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
