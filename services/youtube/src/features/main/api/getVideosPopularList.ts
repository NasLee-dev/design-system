import { VideoThumbnail } from "@/src/shared/api/youtube/types/item";
import { youtube_v3 } from "googleapis";

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
