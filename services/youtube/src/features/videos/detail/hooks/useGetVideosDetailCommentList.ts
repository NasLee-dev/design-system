import {
  GetVideoDetailCommentListRequestParams,
  GetVideosDetailCommentListResponse,
  getVideosDetailCommentList,
} from "../api/getVideoDetailCommentList";
import {
  InfiniteData,
  useSuspenseInfiniteQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

type Params = Pick<GetVideoDetailCommentListRequestParams, "videoId"> & {
  initPageToken?: string;
};

export const useGetVideosDetailCommentList = ({
  videoId,
  initPageToken,
}: Params): UseSuspenseQueryResult<
  InfiniteData<GetVideosDetailCommentListResponse>,
  Error
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["videoDatail", "commentList", videoId, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) =>
      await getVideosDetailCommentList({ videoId, pageToken: pageParam }),
    getNextPageParam: (lastPage: GetVideosDetailCommentListResponse) =>
      lastPage?.nextPageToken,
    initialPageParam: initPageToken,
  });
};
