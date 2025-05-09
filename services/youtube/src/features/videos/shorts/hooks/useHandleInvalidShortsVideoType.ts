import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGetVideosDetail } from "../../detail/hooks/useGetVideosDetail";
import { VideoDetailPageParams } from "../../detail/types";

type Props = VideoDetailPageParams["params"];

export const useHandleInvalidShortsVideoType = ({ videoId }: Props) => {
  const {
    data: { detail: videoDetail },
    isLoading,
  } = useGetVideosDetail({
    videoId,
  });

  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    const isShortsVideo = videoDetail?.videoType === "short";
    if (!isShortsVideo) {
      router.replace(`/videos/detail/${videoId}`);
    }
  }, [isLoading]);
};
