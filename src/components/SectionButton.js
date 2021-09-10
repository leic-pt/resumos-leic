import React from 'react';
import { Link } from 'gatsby';

const SectionButton = ({ name, description, link, image, color, long = false }) => {
  return (
    <Link
      to={link}
      className={`section-button ${long ? 'section-button__long' : ''}`}
      style={{ backgroundColor: color }}
    >
      <div className='section-button__text'>
        <span>{name}</span>
        <span>{description}</span>
      </div>
      <img src={image} alt={name} />
    </Link>
  );
};

export const SectionButtonLayout = ({ children }) => {
  return <div className='section-button-layout'>{children}</div>;
};

export default SectionButton;
