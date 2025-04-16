"use client";
import { VisibilityLoader } from "@/src/shared/components/VisibilityLoader";
import { useSearchParams } from "next/navigation";
import { SearchOrder } from "../../api/getSearchVideosList";
import { useGetSearchVideosList } from "../../hooks/useGetSearchVideosList";
import { SearchResultListItem } from "./ListItem";
import * as s from "./style.css";

export const SearchResultList = () => {
  const searchParams = useSearchParams();
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetSearchVideosList({
      order: (searchParams.get("order") ?? "relevance") as SearchOrder,
      q: searchParams.get("q") ?? "",
    });

  const flatData = data?.pages.map((page) => page.lists).flat();
  return (
    <>
      <section className={s.container}>
        <div className={s.wrapper}>
          {flatData?.map((video) => (
            <SearchResultListItem key={video.videoId} video={video} />
          ))}
        </div>
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
