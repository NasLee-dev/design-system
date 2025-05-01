import { VideosDetailCommentListItem } from "../../../api/getVideoDetailCommentList";
import * as s from "./style.css";
type Props = {
  comment: VideosDetailCommentListItem;
};

export const VideoDetailCommentListItem = ({ comment }: Props) => {
  const { authorProfileImageUrl, authorDisplayName } = comment;
  return (
    <div className={s.wrapper}>
      <img
        className={s.image}
        src={authorProfileImageUrl}
        alt={authorDisplayName}
      />
    </div>
  );
};
