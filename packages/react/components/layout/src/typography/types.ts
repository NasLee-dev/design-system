import { classes } from '@ds/themes';
import { CSSProperties } from '@vanilla-extract/css';
import { AsElementProps, StyleProps } from './../core/types';

export type TextProps = AsElementProps & StyleProps & {
  fontSize: keyof typeof classes.typography.text,
  align?: CSSProperties['textAlign'],
  casing?: CSSProperties['textTransform'],
  decoration?: CSSProperties['textDecoration'],
}

export type HeadingProps = AsElementProps & StyleProps & {
  fontSize: keyof typeof classes.typography.heading
}