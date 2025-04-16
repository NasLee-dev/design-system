import Image from "next/image";
import Link from "next/link";
import { SearchVideosListItem } from "../../../api/getSearchVideosList";
import * as s from "./style.css";
import { getVideoDetailPageLink } from "@/src/shared/utils/link/page";

type Props = {
  video: SearchVideosListItem;
};

export const SearchResultListItem = ({ video }: Props) => {
  const {
    title,
    thumbnails,
    channelTitle,
    publishedAtDisplayText,
    description,
  } = video;
  return (
    <Link
      href={getVideoDetailPageLink({ videoId: video.videoId })}
      className={s.link}
    >
      <div className={s.wrapper}>
        <div className={s.thumbnailWrapper}>
          <Image
            src={thumbnails.url}
            alt={title}
            width={thumbnails.width}
            height={thumbnails.height}
          />
        </div>
        <div className={s.contentsWrapper}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.metadata}>
            {channelTitle} {publishedAtDisplayText}
          </p>
          <p className={s.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};
