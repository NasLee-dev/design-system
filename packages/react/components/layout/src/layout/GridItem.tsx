import * as React from "react";
import { Ref } from "react";
import { GridItemProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinklesProps } from "../utils/properties";
import { vars } from "@ds/themes";

const GridItem = (props: GridItemProps, ref: Ref<HTMLElement>) => {
	const { as = 'div', color, background, children, area, colEnd, colSpan, colStart, rowEnd, rowStart, rowSpan } = props;
	return React.createElement(as, { ...props, ref, className: clsx([StyleSprinkles(extractSprinklesProps(props, Array.from(StyleSprinkles.properties))), props.className]), 
		style: {
			display: 'grid',
      gridArea: area,
      gridColumnEnd: colEnd,
      gridColumnStart: colStart,
      gridColumn: colSpan,
      gridRowEnd: rowEnd,
      gridRowStart: rowStart,
      gridRow: rowSpan,
			color: color && vars.colors.$scale?.[color]?.[700],
      background: background && vars.colors.$scale?.[background]?.[100],
      ...props.style,
		} }, children);
}

const _GridItem = React.forwardRef(GridItem);
export { _GridItem as GridItem };