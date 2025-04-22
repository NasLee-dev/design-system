"use client";

import { useGetVideosDetail } from "../../hooks/useGetVideosDetail";
import { VideoDetailPageParams } from "../../types";
import { VideoDetailChannelProfile } from "../ChannelProfile";
import { VideoDetailDescription } from "../Description";
import * as s from "./style.css";

type Props = VideoDetailPageParams["params"];

export const VideoDetail = ({ videoId }: Props) => {
  const {
    data: { detail: videoDetail },
  } = useGetVideosDetail({ videoId });

  const { title, likeCountDisplayText } = videoDetail;

  return (
    <section className={s.wrapper}>
      <div className={s.videoWrapper}>
        <iframe
          className={s.video}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={s.contentsWrapper}>
        <h1 className={s.title}>{title}</h1>
        <div className={s.infoWrapper}>
          <VideoDetailChannelProfile videoId={videoId} />
          <div className={s.likeWrapper}>{likeCountDisplayText}</div>
        </div>
        <div className={s.panelWrapper}>
          <VideoDetailDescription videoId={videoId} />
        </div>
      </div>
    </section>
  );
};
