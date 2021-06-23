import React from 'react';
import { graphql } from 'gatsby';

import '../styles/main.css';
import '../styles/markdown.css';

const HomePageLayout = ({ data }) => {
  const { markdownRemark: page } = data;
  return (
    <div className='home-page-container'>
      <div className='content' dangerouslySetInnerHTML={{ __html: page.html }} />
    </div>
  );
};

export default HomePageLayout;

export const pageQuery = graphql`
  query HomePageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;
