import {
  getSearchVideosList,
  GetSearchVideosListRequestParams,
  getSearchVideosListURL,
  GetSearchVideosListResponse,
} from "../api/getSearchVideosList";
import {
  useSuspenseInfiniteQuery,
  UseSuspenseInfiniteQueryResult,
  InfiniteData,
} from "@tanstack/react-query";

type Params = Pick<GetSearchVideosListRequestParams, "q" | "order"> & {
  initPageToken?: string;
};

export const useGetSearchVideosList = ({
  q,
  order,
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<
  InfiniteData<GetSearchVideosListResponse, Error>
> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["search", q, order, getSearchVideosListURL],
    queryFn: ({ pageParam = initPageToken }) => {
      return getSearchVideosList({ q, order, pageToken: pageParam });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage: GetSearchVideosListResponse) =>
      lastPage?.nextPageToken,
  });
};
