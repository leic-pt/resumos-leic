import React, { useContext } from 'react';
import { DropdownContext } from './DropdownSelect';

const DropdownOption = ({ value, children }) => {
  const { id, value: selectedValue, onChange } = useContext(DropdownContext);

  return (
    <button
      className={`keep-focus-${id} dropdown-option${value === selectedValue ? ' selected' : ''}`}
      onClick={() => onChange(value)}
    >
      {children}
    </button>
  );
};

export default DropdownOption;
