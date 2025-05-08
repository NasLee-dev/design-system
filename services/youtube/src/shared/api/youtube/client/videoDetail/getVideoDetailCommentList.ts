import { API_BASE_URL } from "@/src/shared/api/youtube/constants";
import {
  CommentListItem,
  ListResponse,
} from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import { GetVideosDetailRequestParams } from "./getVideosDetail";

export type GetVideoDetailCommentListRequestParams =
  GetVideosDetailRequestParams &
    Pick<youtube_v3.Params$Resource$Commentthreads$List, "pageToken">;

export type VideosDetailCommentListItem = CommentListItem & {
  totalReplyCount: number;
};

export type GetVideosDetailCommentListResponse =
  ListResponse<VideosDetailCommentListItem>;

export const getVideosDetailCommentListURL = `${API_BASE_URL}/api/videos/detail/:videoId/comment-list`;

export const getVideosDetailCommentList = async (
  params: GetVideoDetailCommentListRequestParams,
): Promise<GetVideosDetailCommentListResponse> => {
  const url = getVideosDetailCommentListURL.replace(":videoId", params.videoId);
  const response = await fetch(url);
  return response.json();
};
