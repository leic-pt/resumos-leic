import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

const PageMetadata = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    query PageMetadata {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Helmet>
      <title>{title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title}</title>
      <meta name='description' content={description || site.siteMetadata.description}></meta>
    </Helmet>
  );
};

export default PageMetadata;
