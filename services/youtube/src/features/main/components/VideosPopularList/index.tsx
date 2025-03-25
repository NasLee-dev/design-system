"use client";
import { vars } from "@ds/themes";
import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";
import * as s from "./index.css";

export const VideosPopularList = () => {
  const { data } = useGetVideosPopularList({});

  const flatData = data.pages.map((page) => page?.lists ?? []).flat();

  return (
    <section
      style={{
        color: vars.colors.$scale.gray[900],
      }}
    >
      {flatData.map((item) => (
        <div key={item.videoId} className={s.item}>
          <div className={s.itemWrapper}></div>
        </div>
      ))}
    </section>
  );
};
