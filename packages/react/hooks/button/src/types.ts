import { ComponentProps, HTMLAttributes } from "react";

export type ButtonElementType = "button" | "a" | "div" | "span" | "input";

export type BaseButtonProps<T extends ButtonElementType = "button"> = {
  element: T;
  role?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean;
  tabIndex?: number;
} & ComponentProps<T>;

export type UseButtonReturn<T> = {
  buttonProps: HTMLAttributes<T> & {
    role?: string;
    tabIndex: number;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    "data-loading"?: boolean;
  };
}

export type OverloadedButtonFunction = {
  (props: BaseButtonProps<"button">): UseButtonReturn<HTMLButtonElement>;
  (props: BaseButtonProps<"a">): UseButtonReturn<HTMLAnchorElement>;
  (props: BaseButtonProps<"div">): UseButtonReturn<HTMLDivElement>;
  (props: BaseButtonProps<"span">): UseButtonReturn<HTMLSpanElement>;
  (props: BaseButtonProps<"input">): UseButtonReturn<HTMLInputElement>;
};

export type UseToggleButtonReturn<T> = UseButtonReturn<T> & {
  isSelected: boolean;
};

export type OverloadedToggleButtonFunction = {
  (props: BaseButtonProps<"button">, isSelected?: boolean): UseButtonReturn<HTMLButtonElement>;
  (props: BaseButtonProps<"a">, isSelected?: boolean): UseButtonReturn<HTMLAnchorElement>;
  (props: BaseButtonProps<"div">, isSelected?: boolean): UseButtonReturn<HTMLDivElement>;
  (props: BaseButtonProps<"span">, isSelected?: boolean): UseButtonReturn<HTMLSpanElement>;
  (props: BaseButtonProps<"input">, isSelected?: boolean): UseButtonReturn<HTMLInputElement>;
};