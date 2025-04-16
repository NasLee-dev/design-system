"use client";
import { VisibilityLoader } from "@/src/shared/components/VisibilityLoader";
import { flattenInfiniteListData } from "@/src/shared/utils/data";
import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";
import { VideosPopularListItem } from "./ListItem";
import * as s from "./style.css";

export const VideosPopularList = () => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetVideosPopularList({});

  const flatData = flattenInfiniteListData(data);

  return (
    <>
      <section className={s.wrapper}>
        {flatData.map((item) => (
          <VideosPopularListItem key={item.videoId} video={item} />
        ))}
      </section>
      {hasNextPage && (
        <VisibilityLoader
          callback={() => {
            !isFetchingNextPage && fetchNextPage();
          }}
        />
      )}
    </>
  );
};
