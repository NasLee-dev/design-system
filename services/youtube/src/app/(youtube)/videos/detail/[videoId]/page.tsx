import { VideoDetail } from "@/src/features/videos/detail/components/VideoDetail";
import { VideoDetailCommentList } from "@/src/features/videos/detail/components/VideoDetailCommentList";
import { VideoDetailPageParams } from "@/src/features/videos/detail/types";
import { Suspense } from "react";
import * as s from "./style.css";

export default function VideoDetailPage({ params }: VideoDetailPageParams) {
  const { videoId } = params;

  return (
    <main>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Suspense fallback={<div>loading...</div>}>
            <VideoDetail videoId={videoId} />
          </Suspense>
          <Suspense fallback={<div>loading...</div>}>
            <VideoDetailCommentList videoId={videoId} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
