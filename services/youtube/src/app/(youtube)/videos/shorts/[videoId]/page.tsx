import { VideoDetailPageParams } from "@/src/features/videos/detail/types";
import { ShortsVideoList } from "@/src/features/videos/shorts/components/ShortsVideosList";
import { Suspense } from "react";
import * as s from "./style.css";
export default function ShortsVideoDetailPage({
  params,
}: VideoDetailPageParams) {
  const { videoId } = params;

  return (
    <main>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Suspense fallback={<div>loading...</div>}>
            <ShortsVideoList videoId={videoId} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
