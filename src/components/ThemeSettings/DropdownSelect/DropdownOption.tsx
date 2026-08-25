import { useContext } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { DropdownContext } from './DropdownSelect';

interface DropdownOptionProps {
  value: string;
  children: ReactNode;
  style?: CSSProperties;
}

const DropdownOption = ({ value, children, style }: DropdownOptionProps) => {
  const { id, value: selectedValue, onChange } = useContext(DropdownContext);

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
