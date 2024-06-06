import * as React from "react";
import { TextProps } from "./types";
import { BaseStyle, StyleSprinkles } from "../core/style.css";
import { vars } from "@ds/themes";
import { clsx } from "clsx";

import { textStyle } from "./style.css";
import { extractSprinklesProps } from "../utils/properties";

const Text = (props: TextProps, ref: React.Ref<HTMLElement>) => {
  const { as = "p", color = 'gray', background, children, fontSize } = props;

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
        textStyle({
          fontSize,
        }),
        props.className,
      ]),
      style: {
        color: color && vars.colors.$scale?.[color]?.[700],
        background: background && vars.colors.$scale?.[background]?.[100],
        ...props.style,
      },
    },
    children,
  );
};

const _Text = React.forwardRef(Text);
export { _Text as Text };