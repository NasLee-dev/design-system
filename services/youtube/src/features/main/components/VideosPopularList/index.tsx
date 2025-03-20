"use client";
import { vars } from "@ds/themes";
import { useEffect } from "react";
import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";

export const VideosPopularList = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useGetVideosPopularList(
    {},
  );

  useEffect(() => {
    setTimeout(() => {
      fetchNextPage();
    }, 2000);
  }, [fetchNextPage]);
  return (
    <section
      style={{
        color: vars.colors.$scale.gray[900],
      }}
    >
      <h2>목록</h2>
      <br />
      <p>fetching: {isFetchingNextPage ? "true" : "false"}</p>
      <br />
      <h2>{data.pages[0].lists[0].title}</h2>
      <button onClick={() => fetchNextPage()}>더보기</button>
    </section>
  );
};
