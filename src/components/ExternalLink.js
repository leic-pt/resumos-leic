import React from 'react';

const ExternalLink = ({ href, children, ...props }) => {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' {...props}>
      {children}
    </a>
  );
};

export default ExternalLink;
