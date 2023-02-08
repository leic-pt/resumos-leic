import React, { useContext } from 'react';
import { DropdownContext } from './DropdownSelect';

const DropdownOption = ({ value, children }) => {
  const { value: selectedValue, onChange } = useContext(DropdownContext);

  return (
    <button
      className={`keep-focus dropdown-option${value === selectedValue ? ' selected' : ''}`}
      onClick={() => onChange(value)}
    >
      {children}
    </button>
  );
};

export default DropdownOption;
