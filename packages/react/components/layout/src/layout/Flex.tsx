import * as React from "react";
import { FlexProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { extractSprinklesProps } from "../utils/properties";
import { vars } from "@ds/themes";

const Flex = (props: FlexProps, ref: React.Ref<HTMLElement>) => {
  const { as = "div", color, background, align, basis, direction, grow, justify, shrink, wrap, gap, children } = props;

  return React.createElement(
    as,
    {
      ...props,
      ref,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinklesProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ]),
      style: {
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        gap,
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Flex = React.forwardRef(Flex);
export { _Flex as Flex };