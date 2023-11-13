import React from 'react';

const Option = ({ name, children }) => {
  return (
    <div className='option-item'>
      <p className='option-name'>{name}</p>
      <div>{children}</div>
    </div>
  );
};

export default Option;
