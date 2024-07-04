import { useState } from 'react';
import { UseInputProps, UseInputResult } from './type';
export const useInput = (props: UseInputProps): UseInputResult => {
  const { isDisabled = false, isInvalid = false, isReadOnly = false, isRequired = false, defaultValue, value, onChange, ...rest } = props;

  const isControlled = value !== undefined && onChange !== undefined;
  const [unControlledValue, setUncontrolledValue] = useState(defaultValue ?? '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isControlled) {
      onChange(event);
    } else {
      setUncontrolledValue(event.target.value);
    }
  };

  const currentValue = isControlled ? value : unControlledValue;

  return {
    inputProps: {
      ...rest,
      defaultValue,
      value: currentValue,
      onChange: handleChange,
      disabled: isDisabled,
      readOnly: isReadOnly,
      "data-disabled": isDisabled,
      "data-invalid": isInvalid,
      "aria-invalid": isInvalid,
      "aria-required": isRequired,
    },
    valueCount: currentValue?.toString().length ?? 0,
  }
};
