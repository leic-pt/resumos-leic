import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from './Sidebar';

import 'katex/dist/katex.min.css';
import '../styles/main.css';
import '../styles/markdown.css';

export default function Template({ data }) {
  const { markdownRemark: page, allFile: sidebarPaths } = data;
  return (
    <div className=''>
      <Sidebar paths={sidebarPaths} />
      <div className='main-container'>
        <h1>{page.frontmatter}</h1>
        <div className='content' dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query PageByPath($path: String!, $pathRegex: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
    }
    allFile(
      filter: {
        childMarkdownRemark: { frontmatter: { path: { regex: $pathRegex } } }
        extension: { eq: "md" }
      }
      sort: { fields: relativePath }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  }
`;
