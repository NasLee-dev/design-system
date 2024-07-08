import { ComponentPropsWithRef } from 'react';

export type UseSelectProps = {
  isDisabled?: boolean;
  isInvalid?: boolean;
  isRequired?: boolean;
} & Omit<ComponentPropsWithRef<"select">, "disabled">;

export type UseSelectReturn = {
  selectProps: ComponentPropsWithRef<"select"> & {
    "data-disabled": boolean;
    "data-invalid": boolean;
    "aria-invalid": boolean;
    "aria-required": boolean;
  };
};