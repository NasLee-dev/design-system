import { ComponentPropsWithRef } from 'react';
import { vars } from '@ds/themes';


type Size = 'lg' | 'md' | 'sm' | 'xs';
type Color = keyof typeof vars.colors.$scale;

export type InputProps = {
  color?: Color;
  size?: Size;
  variant?: "outline" | "filled";
  errorBorderColor?: string;
  focusBorderColor?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  value?: string;
  onChange?: string;
} & Omit<ComponentPropsWithRef<"input">, "disabled" | "readOnly">;

export type InputGroupProps = {
  color?: Color;
  size?: Size;
  children: React.ReactNode[];
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

export type InputLeftAddonProps = {
  color?: Color;
  size?: Size;
  children: React.ReactNode;
};