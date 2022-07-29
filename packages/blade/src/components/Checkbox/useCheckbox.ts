/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import type { GestureResponderEvent } from 'react-native';
import { useControllableState } from '../../hooks/useControllable';
import { useId } from '../../hooks/useId';
import { getPlatformType, makeAccessible } from '../../utils';
import type { CheckboxProps } from './Checkbox';

type UseCheckboxProps = Pick<
  CheckboxProps,
  | 'isChecked'
  | 'defaultChecked'
  | 'isDisabled'
  | 'isIndeterminate'
  | 'isRequired'
  | 'onChange'
  | 'name'
  | 'value'
> & { hasError?: boolean };

/**
 * indeterminate is not a HTML input element prop,
 * it's an IDL prop thus we need to set it on the underlying HTMLInputElement
 */
function setMixed(element: HTMLInputElement, mixed?: boolean) {
  if (mixed) {
    element.indeterminate = true;
  } else if (element.indeterminate) {
    element.indeterminate = false;
  }
}

const useCheckbox = ({
  isChecked,
  defaultChecked,
  isIndeterminate,
  isDisabled,
  isRequired,
  hasError,
  onChange,
  name,
  value,
}: UseCheckboxProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const isReactNative = getPlatformType() === 'react-native';
  if (isChecked && defaultChecked) {
    throw new Error(
      `[Blade useCheckbox] Do not provide both 'isChecked' and 'defaultChecked' to useCheckbox. Consider if you want this component to be controlled or uncontrolled.`,
    );
  }

  const [checkboxState, setCheckboxStateChange] = useControllableState({
    value: isChecked,
    defaultValue: defaultChecked ?? false,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement> | GestureResponderEvent) => {
    if (isDisabled) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }
    setCheckboxStateChange((checked) => {
      onChange?.({
        isChecked: !checked,
        event: event as React.ChangeEvent,
        value,
      });
      return !checked;
    });
  };

  // set indeterminate to input
  React.useEffect(() => {
    const element = inputRef.current;
    if (!element) return;
    setMixed(element, isIndeterminate);
  }, [isIndeterminate]);

  const state = {
    isReactNative,
    isChecked: checkboxState,
    setChecked: setCheckboxStateChange,
  };

  const idBase = useId('checkbox');
  const errorTextId = useId(`${idBase}-errortext`);
  const helpTextId = useId(`${idBase}-helptext`);

  const accessibilityProps = makeAccessible({
    role: 'checkbox',
    required: Boolean(isRequired),
    hidden: !isReactNative,
    invalid: Boolean(hasError),
    disabled: Boolean(isDisabled),
    checked: checkboxState,
    errorMessage: errorTextId,
    describedBy: helpTextId,
  });

  if (isReactNative) {
    return {
      state,
      inputProps: {
        onPress: handleOnChange,
        name,
        value,
        ...accessibilityProps,
      },
    };
  }

  return {
    state,
    ids: { errorTextId, helpTextId },
    inputProps: {
      ref: inputRef,
      onChange: handleOnChange,
      type: 'checkbox',
      name,
      value,
      checked: checkboxState,
      disabled: isDisabled,
      required: isRequired,
      ...accessibilityProps,
    },
  };
};

export type InputProps = ReturnType<typeof useCheckbox>['inputProps'];

export { useCheckbox };
