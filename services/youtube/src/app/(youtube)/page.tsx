import { VideosPopularList } from "@/src/features/main/components/VideosPopularList";
import * as s from "./page.css";
import { Suspense } from "react";
export default function Home() {
  return (
    <main className={s.main}>
      <Suspense fallback={<div>Loading...</div>}>
        <VideosPopularList />
      </Suspense>
    </main>
  );
}
