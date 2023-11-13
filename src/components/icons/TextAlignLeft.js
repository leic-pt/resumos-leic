import React from 'react';

const TextAlignLeft = ({ size = 24 }) => {
  return (
    <svg style={{ width: size, height: size }} viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z'
      />
    </svg>
  );
};

export default TextAlignLeft;
