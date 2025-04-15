"use client";
import { useSearchParams } from "next/navigation";
import { SearchOrder } from "../../api/getSearchVideosList";
import { useGetSearchVideosList } from "../../hooks/useGetSearchVideosList";
import * as s from "./style.css";

export const SearchResultList = () => {
  const searchParams = useSearchParams();
  const { data } = useGetSearchVideosList({
    order: (searchParams.get("order") as SearchOrder) ?? "relevance",
    q: searchParams.get("q") as string,
  });

  const flatData = data?.pages.map((page) => page.lists).flat();
  return (
    <section className={s.container}>
      <div className={s.wrapper}>{flatData[0].title}</div>
    </section>
  );
};
