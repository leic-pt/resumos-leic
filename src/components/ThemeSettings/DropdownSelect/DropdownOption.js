import React, { useContext } from 'react';
import { DropdownContext } from './DropdownSelect';

const DropdownOption = ({ value, children, font }) => {
  const { id, value: selectedValue, onChange } = useContext(DropdownContext);

  const style = font ? { fontFamily: font, fontSize: '17px' } : {};

  return (
    <button
      className={`keep-focus-${id} dropdown-option${value === selectedValue ? ' selected' : ''}`}
      onClick={() => onChange(value)}
      style={style}
    >
      {children}
    </button>
  );
};

export default DropdownOption;
