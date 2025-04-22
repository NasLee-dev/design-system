import React from "react";
import { VideoDetailPageParams } from "../../types";

type Props = VideoDetailPageParams["params"] &
  React.HTMLAttributes<HTMLDivElement>;

export const VideoDetailDescription = ({ videoId, ...props }: Props) => {
  return <div {...props}></div>;
};
