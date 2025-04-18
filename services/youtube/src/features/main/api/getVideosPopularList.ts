import { API_BASE_URL } from "@/src/shared/api/youtube/constants";
import { VideoStatistics } from "@/src/shared/api/youtube/types/item";
import {
  ListResponse,
  VideoListItem,
} from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type GetVideoPopularListRequestParams = Pick<
  youtube_v3.Params$Resource$Videos$List,
  "maxResults" | "pageToken"
>;

export type PopularListItem = Pick<
  VideoStatistics,
  "viewCount" | "viewCountDisplayText"
> &
  VideoListItem;

export type GetVideoPopularListResponse = ListResponse<PopularListItem>;

export const getVideosPopularListURL = `${API_BASE_URL}/api/videos/popular-list`;

export const getVideoPopularList = async (
  params: GetVideoPopularListRequestParams,
): Promise<GetVideoPopularListResponse> => {
  const queryParams = queryString.stringify(params);
  const url = `${getVideosPopularListURL}?${queryParams}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch video popular list");
  }

  const data = await response.json();
  return data;
};
