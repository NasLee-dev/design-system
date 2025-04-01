"use client";
import React from "react";
import { VideoPopularListItemSkeleton } from "./ListItem/Skeleton";
import * as s from "./style.css";

export const VideosPopularListSkeleton = () => {
  const items = Array.from({ length: 10 }, (_, index) => (
    <VideoPopularListItemSkeleton key={index} />
  ));
  return <section className={s.wrapper}>{items}</section>;
};
