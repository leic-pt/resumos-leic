import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

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
    <>
      <title>{title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title}</title>
      <meta name='description' content={description || site.siteMetadata.description}></meta>
    </>
  );
};

export default PageMetadata;
