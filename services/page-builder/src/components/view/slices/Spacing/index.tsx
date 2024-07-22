import React from "react";
import { Box } from '@ds/react-components-layout';
import { vars } from "@ds/themes";

type Props = {
  sliceStyle?: {
    height?: number;
    backgroundColor?: string;
  }
};

export const SpacingSlice: React.FC<Props> = ({ sliceStyle }: Props) => {
  const {
    height = 16,
    backgroundColor = vars.colors.$static.light.color.white,
  } = sliceStyle ?? {};
  return (
    <Box
      style={{
        height: `${height}px`,
        backgroundColor: backgroundColor,
        width: "100%",
      }}
    />
  );
};
