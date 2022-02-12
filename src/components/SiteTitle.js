import { Paper, Typography } from '@mui/material';
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
    <Paper sx={{ mx: 2, mt: 1, px: 2, py: 1 }}>
      <Typography variant='h6' component='h1'>
        {site.siteMetadata.title}
      </Typography>
    </Paper>
  );
};

export default SiteTitle;
