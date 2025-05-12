"use client";

import { VisibilityLoader } from "@/src/shared/components/VisibilityLoader";
import { flattenInfiniteListData } from "@/src/shared/utils/data";
import { useGetVideosDetail } from "../../../features/videos/detail/hooks/useGetVideosDetail";
import { useGetVideosDetailCommentList } from "../../../features/videos/detail/hooks/useGetVideosDetailCommentList";
import { VideoDetailPageParams } from "../../../features/videos/detail/types";
import { VideoDetailCommentListItem } from "./ListItem";
import * as s from "./style.css";

type Props = VideoDetailPageParams["params"];

export const VideoDetailCommentList = ({ videoId }: Props) => {
  const {
    data: { detail: videoDetail },
  } = useGetVideosDetail({ videoId });

  const { data, isFetching, fetchNextPage, hasNextPage } =
    useGetVideosDetailCommentList({
      videoId,
    });
  const flatData = flattenInfiniteListData(data);
  return (
    <>
      <section className={s.wrapper}>
        <h4 className={s.title}>
          댓글 {videoDetail.commentCountDisplayText}개
        </h4>
        <div className={s.contentsWrapper}>
          {flatData.map((comment) => (
            <VideoDetailCommentListItem
              key={comment.commentId}
              comment={comment}
            />
          ))}
        </div>
      </section>
      {hasNextPage && (
        <VisibilityLoader
          callback={() => {
            !isFetching && fetchNextPage();
          }}
        />
      )}
    </>
  );
};
