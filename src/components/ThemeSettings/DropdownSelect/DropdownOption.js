import React, { useContext } from 'react';
import { DropdownContext } from './DropdownSelect';
import { fonts } from '../../../hooks/theme-hooks';

const DropdownOption = ({ value, children }) => {
  const { id, value: selectedValue, onChange } = useContext(DropdownContext);

  const style = fonts[value] ? { fontFamily: fonts[value]['cssFamily'], fontSize: '17px' } : {};

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
