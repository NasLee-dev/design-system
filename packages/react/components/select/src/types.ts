import { UseSelectProps } from '@ds/react-hooks-select';
import { vars } from '@ds/themes';

type Size = "lg" | "md" | "sm" | "xs";
type Color = keyof typeof vars.colors;

export type SelectProps = UseSelectProps & {
  color?: Color;
  size?: Size;
  variant?: "outline" | "filled";
  errorBorderColor?: string;
  focusBorderColor?: string;
};
