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
