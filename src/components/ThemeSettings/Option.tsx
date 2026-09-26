import type { ReactNode } from 'react';

interface OptionProps {
  name: string;
  children: ReactNode;
}

const Option = ({ name, children }: OptionProps) => {
  return (
    <div className='option-item'>
      <p className='option-name'>{name}</p>
      <div>{children}</div>
    </div>
  );
};

export default Option;
