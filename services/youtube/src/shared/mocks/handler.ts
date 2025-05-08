import { HttpHandler } from "msw";
import { getMockVideosPopularList } from "@/src/features/main/api/getVideosPopularList.mock";
import { getMockSearchVideosList } from "@/src/features/search/api/getSearchVideosList.mock";
import { getMockVideosDetailCommentList } from "@/src/shared/api/youtube/client/videoDetail/getVideoDetailCommentList.mock";

export const handlers: HttpHandler[] = [
  getMockVideosPopularList,
  getMockSearchVideosList,
  getMockVideosDetailCommentList,
];
