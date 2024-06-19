import { vars } from "@ds/themes";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { clsx } from "clsx";
import * as React from "react";
import { activeColorVariant, buttonStyle, enableColorVariant, hoverColorVariant, spanStyle, spinnerStyle } from "./style.css";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const { 
 
    variant="solid", 
    size="md", 
    color="gray", 
    leftIcon,
    rightIcon,
    isLoading,
    isDisabled = false,
    onKeyDown,
    style,
    children
  } = props;

  const enableColor = vars.colors.$scale[color][500];
  const hoverColor = variant === "solid" ? vars.colors.$scale[color][600] : vars.colors.$scale[color][50];
  const activeColor = variant === "solid" ? vars.colors.$scale[color][700] : vars.colors.$scale[color][100];

  const disabled = isDisabled || isLoading;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown && onKeyDown(event);
    if (event.key === "Enter" || event.key === "13") {
      event.preventDefault();
      event.currentTarget.click();
    }
  }

  return <button {...props} onKeyDown={handleKeyDown} role="button" ref={ref} className={clsx([
    buttonStyle(
      {
        variant,
        size,
      }
    )
  ])} 
  onClick={() => {
    console.log("Button clicked");
  }}
  data-loading={isLoading}
  disabled={disabled} 
  style={{
    ...assignInlineVars({
      [enableColorVariant]: enableColor,
      [hoverColorVariant]: hoverColor,
      [activeColorVariant]: activeColor,
    }),
    ...style
  }}>
    {isLoading && <div className={spinnerStyle({ size })} />}
    {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
    <span>{children}</span>
    {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
    </button>;
}

const _Button = React.forwardRef(Button);
export { _Button as Button };