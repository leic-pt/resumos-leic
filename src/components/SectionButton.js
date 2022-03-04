import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Link as MuiLink } from '@mui/material';
import { styled } from '@mui/system';

const SectionButtonLink = styled(MuiLink)({
  background: '#000',
  position: 'relative',
  padding: '0.5rem',
  borderRadius: 5,
  width: '100%',
  minWidth: '170px',
  height: '7rem',
  color: 'white',
  fontWeight: 'bold',
  boxSizing: 'border-box',
});

const SectionButtonText = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const SectionButtonTitle = styled('span')({
  fontSize: '2rem',
});

const SectionButtonImage = styled('img')({
  width: '5rem',
  position: 'absolute',
  right: '0.5rem',
  bottom: '1rem',
});

const SectionButton = ({ name, description, link, image, color = '#000', long = false }) => {
  return (
    <SectionButtonLink
      to={link}
      component={GatsbyLink}
      underline='none'
      sx={{
        backgroundColor: color,
        gridColumn: long ? '1 / 3' : undefined,
      }}
    >
      <SectionButtonText>
        <SectionButtonTitle>{name}</SectionButtonTitle>
        <span>{description}</span>
      </SectionButtonText>
      <SectionButtonImage src={image} alt={name} />
    </SectionButtonLink>
  );
};

export const SectionButtonLayout = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '0.5rem',
  rowGap: '0.5rem',
});

export default SectionButton;
