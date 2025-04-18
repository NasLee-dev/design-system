import {
  getVideosDetail,
  GetVideosDetailRequestParams,
  GetVideosDetailResponse,
} from "@/src/shared/api/youtube/client/videoDetail/getVideosDetail";
import {
  useSuspenseQuery,
  UseSuspenseQueryResult,
} from "@tanstack/react-query";

type Params = GetVideosDetailRequestParams;

export const useGetVideosDetail = (
  params: Params,
): UseSuspenseQueryResult<GetVideosDetailResponse> => {
  return useSuspenseQuery({
    queryKey: ["videosDetail", params],
    queryFn: async () => await getVideosDetail(params),
  });
};
