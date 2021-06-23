import React from 'react';
import { Link } from 'gatsby';

const SectionButton = ({ name, link, image, color }) => {
  console.log(image);
  return (
    <Link to={link} class='section-button' style={{ backgroundColor: color }}>
      <span>{name}</span>
      <img src={image} alt={name} />
    </Link>
  );
};

export const SectionButtonLayout = ({ children }) => {
  return <div class='section-button-layout'>{children}</div>;
};

export default SectionButton;
