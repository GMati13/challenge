import React, { FC, forwardRef, Ref, useCallback, useState } from 'react';

import Input from '../Input/Input';

interface Props {
  /**
   * Identifier for form submit
   */
  name?: string;

  /**
   * Label to be displayed alongside with toggle input
   */
  label?: string;

  /**
   * Default value of toggle input, does not make the input controlled
   */
  defaultValue?: boolean;

  /**
   * Read only mode. Default: false
   */
  disabled?: boolean;

  /**
   * Register callback for change event
   */
  onChange?: (newChecked: boolean) => void;

  /**
   * React ref passtrough to input node
   */
  ref?: Ref<HTMLInputElement>;

  /**
   * Class for checkbox
   */
  className?: string;
}

const Checkbox: FC<Props> = forwardRef((props, ref) => {
  const { label, name, disabled, className, defaultValue, onChange, ...otherProps } = props;


  const [isChecked, setChecked] = useState(defaultValue);

  const toggle = useCallback(
    () => {
      const newValue = !isChecked;
      setChecked(newValue);

      if (onChange) {
        onChange(newValue);
      }
    },
    [isChecked, onChange],
  );

  return (
    <input
      type='checkbox'
      className={className}
      ref={ref}
      checked={isChecked}
      disabled={disabled}
      onChange={toggle}
      {...otherProps}
    />
  );
});

export default Checkbox;
