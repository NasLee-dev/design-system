import * as React from "react";
import { Ref } from "react";
import { GridProps } from "./types";
import { clsx } from "clsx";
import { StyleSprinkles } from "../core/style.css";
import { extractSprinklesProps } from "../utils/properties";
import { vars } from "@ds/themes";

const Grid = (props: GridProps, ref: Ref<HTMLElement>) => {
	const { as = 'div', color, background, children, autoColumns, autoFlow, autoRows, columnGap, column, gap, row, rowGap, templateAreas, templateColumns, templateRows  } = props;
	return React.createElement(as, { ...props, ref, className: clsx([StyleSprinkles(extractSprinklesProps(props, Array.from(StyleSprinkles.properties))), props.className]), 
		style: {
			display: 'grid',
      gridAutoColumns: autoColumns,
      gridAutoFlow: autoFlow,
      gridAutoRows: autoRows,
      gridColumn: column,
      columnGap: columnGap,
      gap: gap,
      gridRow: row,
      rowGap: rowGap,
      gridTemplateAreas: templateAreas,
      gridTemplateColumns: templateColumns,
      gridTemplateRows: templateRows,
			color: color && vars.colors.$scale?.[color]?.[700],
      background: background && vars.colors.$scale?.[background]?.[100],
      ...props.style,
		} }, children);
}

const _Grid = React.forwardRef(Grid);
export { _Grid as Grid };