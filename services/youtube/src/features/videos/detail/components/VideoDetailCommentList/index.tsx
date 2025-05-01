"use client";

import { flattenInfiniteListData } from "@/src/shared/utils/data";
import { useGetVideosDetail } from "../../hooks/useGetVideosDetail";
import { useGetVideosDetailCommentList } from "../../hooks/useGetVideosDetailCommentList";
import { VideoDetailPageParams } from "../../types";
import { VideoDetailCommentListItem } from "./ListItem";
import * as s from "./style.css";

type Props = VideoDetailPageParams["params"];

export const VideoDetailCommentList = ({ videoId }: Props) => {
  const {
    data: { detail: videoDetail },
  } = useGetVideosDetail({ videoId });

  const { data } = useGetVideosDetailCommentList({ videoId });
  const flatData = flattenInfiniteListData(data);
  return (
    <section className={s.wrapper}>
      <h4 className={s.title}>댓글 {videoDetail.commentCountDisplayText}개</h4>
      <div className={s.contentsWrapper}>
        {flatData.map((comment) => (
          <VideoDetailCommentListItem
            key={comment.commentId}
            comment={comment}
          />
        ))}
      </div>
    </section>
  );
};
