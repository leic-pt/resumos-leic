import React from 'react';
import { Link } from 'gatsby';

const SectionButton = ({ name, link, image, color }) => {
  return (
    <Link to={link} className='section-button' style={{ backgroundColor: color }}>
      <span>{name}</span>
      <img src={image} alt={name} />
    </Link>
  );
};

export const SectionButtonLayout = ({ children }) => {
  return <div className='section-button-layout'>{children}</div>;
};

export default SectionButton;
