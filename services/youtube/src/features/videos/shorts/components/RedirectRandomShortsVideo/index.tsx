"use client";
import { flattenInfiniteListData } from "@/src/shared/utils/data";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useGetShortsVideosList } from "../../hooks/useGetShortsVideosList";

export const RedirectRandomShortsVideo = () => {
  const { data } = useGetShortsVideosList({});
  const flatData = flattenInfiniteListData(data);
  const router = useRouter();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * flatData.length);
    const randomVideoId = flatData[randomNumber].videoId;
    router.push(`/videos/shorts/${randomVideoId}?videoType=short`);
  }, [flatData, router]);
  return <div></div>;
};
