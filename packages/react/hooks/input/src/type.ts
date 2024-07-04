import { ComponentPropsWithRef } from "react";

export type UseInputProps = {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  value?: string;
  onChange?: string;
} & Omit<ComponentPropsWithRef<"input">, "disabled" | "readOnly">;

export type UseInputResult = {
  inputProps: ComponentPropsWithRef<"input"> & {
    "data-disabled": boolean;
    "data-invalid": boolean;
    "aria-invalid": boolean;
    "aria-required": boolean;
  };
  valueCount: number;
};
