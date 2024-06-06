import { vars } from '@ds/themes';
import { StyleSprinkles } from './style.css';
export type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

export type ElementProps = Omit<React.HTMLProps<HTMLElement>, 'as'>;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color?: keyof typeof vars.colors.$scale;
  background?: keyof typeof vars.colors.$scale;
}

export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
