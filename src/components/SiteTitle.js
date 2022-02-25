import { Typography } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

const SiteTitle = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Typography variant='h6' component='h1'>
      {site.siteMetadata.title}
    </Typography>
  );
};

export default SiteTitle;
