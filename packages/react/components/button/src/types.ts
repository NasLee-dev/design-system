import { vars } from '@ds/themes';

export type ButtonProps = {
  color?: keyof typeof vars.colors.$scale,
  isDisabled?: boolean,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  isLoading?: boolean,
  size?: 'xs' | 'sm' | 'md' | 'lg',
  variant?: 'solid' | 'outline' | 'ghost',
} & React.ButtonHTMLAttributes<HTMLButtonElement>;