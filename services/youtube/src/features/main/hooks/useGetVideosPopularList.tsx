import {
  getVideoPopularList,
  GetVideoPopularListRequestParams,
  GetVideoPopularListResponse,
  getVideosPopularListPath,
} from "../api/getVideosPopularList";
import {
  UseSuspenseInfiniteQueryResult,
  useSuspenseInfiniteQuery,
  InfiniteData,
} from "@tanstack/react-query";

type Params = Pick<GetVideoPopularListRequestParams, "maxResults"> & {
  initPageToken?: string;
};

export const useGetVideosPopularList = ({
  maxResults,
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetVideoPopularListResponse>,
  Error
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["videos", getVideosPopularListPath, maxResults, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) => {
      return await getVideoPopularList({
        maxResults,
        pageToken: pageParam,
      });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage: GetVideoPopularListResponse) =>
      lastPage.nextPageToken,
    getPreviousPageParam: (firstPage: GetVideoPopularListResponse) =>
      firstPage.prevPageToken,
  });
};
