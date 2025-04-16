import { API_BASE_URL } from "@/src/shared/api/constants";
import {
  ListResponse,
  VideoListItem,
} from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type SearchOrder = "relevance" | "date" | "viewCount";

export type GetSearchVideosListRequestParams = Pick<
  youtube_v3.Params$Resource$Search$List,
  "q" | "pageToken"
> & {
  order?: SearchOrder;
};

export type SearchVideosListItem = VideoListItem;

export type GetSearchVideosListResponse = ListResponse<SearchVideosListItem>;

export const getSearchVideosListURL = `${API_BASE_URL}/api/videos/search`;

export const getSearchVideosList = async (
  params: GetSearchVideosListRequestParams,
): Promise<GetSearchVideosListResponse> => {
  const queryParams = queryString.stringify(params);
  const url = `${getSearchVideosListURL}?${queryParams}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`);

      const errorText = await response
        .text()
        .catch(() => "No error details available");
      console.error(`Error details: ${errorText}`);

      return {
        lists: [],
        nextPageToken: undefined,
        prevPageToken: undefined,
        totalResults: 0,
      };
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.warn(`Unexpected content type: ${contentType}`);
    }

    const responseText = await response.text();

    if (!responseText || responseText.trim() === "") {
      console.warn("Empty response received from API");
      return {
        lists: [],
        nextPageToken: undefined,
        prevPageToken: undefined,
        totalResults: 0,
      };
    }

    try {
      return JSON.parse(responseText) as GetSearchVideosListResponse;
    } catch (parseError) {
      console.error("Failed to parse JSON response:", parseError);
      console.error("Raw response text:", responseText);

      return {
        lists: [],
        nextPageToken: undefined,
        prevPageToken: undefined,
        totalResults: 0,
      };
    }
  } catch (networkError) {
    console.error("Network error occurred:", networkError);

    return {
      lists: [],
      nextPageToken: undefined,
      prevPageToken: undefined,
      totalResults: 0,
    };
  }
};
