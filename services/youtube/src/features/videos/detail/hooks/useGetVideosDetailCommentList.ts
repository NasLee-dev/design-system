import {
  InfiniteData,
  UseSuspenseInfiniteQueryResult,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";

import {
  GetVideoDetailCommentListRequestParams,
  getVideosDetailCommentList,
  GetVideosDetailCommentListResponse,
} from "../api/getVideoDetailCommentList";

type Params = Pick<GetVideoDetailCommentListRequestParams, "videoId"> & {
  initPageToken?: string;
};

export const useGetVideosDetailCommentList = ({
  videoId,
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetVideosDetailCommentListResponse>,
  Error
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["videoDetail", "commentList", videoId, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) =>
      await getVideosDetailCommentList({ videoId, pageToken: pageParam }),
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage: GetVideosDetailCommentListResponse) =>
      lastPage.nextPageToken,
  });
};
