import React from 'react';
import { graphql } from 'gatsby';

import 'katex/dist/katex.min.css';
import '../styles/main.css';
import '../styles/markdown.css';

export default function Template({ data }) {
  const { markdownRemark: page } = data;
  return (
    <div className=''>
      <div className='main-container'>
        <h1>{page.frontmatter}</h1>
        <div className='content' dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query PageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
  }
`;
