import { API_BASE_URL } from "@/src/shared/api/youtube/constants";
import { VideoThumbnail } from "@/src/shared/api/youtube/types/item";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type GetVideoPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;

export type PopularListItem = {
  videoId: string;
  title: string;
  description: string;
  channerId: string;
  channelTitle: string;
  thumbnail: VideoThumbnail;
  publishedAtDisplayText: string;
  viewCount: number;
  viewCountDisplayText: string;
};

export interface GetVideoPopularListResponse {
  lists: {
    videoId: string;
    title: string;
    description: string;
    channelId: string;
    channelTitle: string;
    thumbnail: {
      url: string;
    };
    publishedAt: string;
    publishedAtDisplayText: string;
    viewCount: number;
    viewCountDisplayText: string;
  }[];
  prevPageToken?: string;
  nextPageToken?: string;
  totalResults: number;
}

export const getVideosPopularListPath = "/api/videos/popular-list";

export const getVideoPopularList = async (
  params: GetVideoPopularListRequestParams,
): Promise<GetVideoPopularListResponse> => {
  const queryParams = queryString.stringify(params);
  const url = `${API_BASE_URL}${getVideosPopularListPath}?${queryParams}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch video popular list");
  }

  const data = await response.json();
  return data;
};
