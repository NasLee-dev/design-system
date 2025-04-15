import { style } from "@vanilla-extract/css";
import { responsiveStyle } from "../../../../shared/styles/functions/layout.css";
import { f } from "../../../../shared/styles/functions";

export const container = style([
  f.wFull,
  f.flex,
  f.justifyCenter,
  f.alignCenter,
  responsiveStyle({
    md: {
      padding: "0.5rem 1.5rem",
    },
    sm: {
      padding: "0.5rem 0",
    },
  }),
]);

export const wrapper = style([
  f.wFull,
  f.flex,
  f.directionColumn,
  {
    maxWidth: "68.5rem",
    gap: "0.75rem",
  },
]);
