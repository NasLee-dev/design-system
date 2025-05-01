import { style } from "@vanilla-extract/css";
import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";

export const wrapper = style([
  f.wFull,
  f.flex,
  f.justifyStart,
  f.alignStart,
  {
    gap: "8px",
  },
]);

export const image = style([
  {
    borderRadius: "50%",
    objectFit: "cover",
  },
  responsiveStyle({
    md: {
      width: "40px",
      height: "40px",
    },
    sm: {
      width: "32px",
      height: "32px",
    },
  }),
]);
