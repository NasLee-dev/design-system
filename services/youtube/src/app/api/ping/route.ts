import { NextResponse } from "next/server";

export const GET = async () => {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&key=${apiKey}`,
  );

  const data = await res.json();

  return NextResponse.json({
    data,
  });
};
