import { vars } from "@ds/themes";
import { style } from "@vanilla-extract/css";
import { f } from "../../shared/styles/functions";

export const main = style([
  f.flexCenterBox,
  f.hScreen,
  f.wFull,
  {
    backgroundColor: vars.colors.$scale.gray[50],
  },
]);

export const typo = style([
  f.color.scale.gray[600],
  {
    fontSize: "24px",
  },
]);
