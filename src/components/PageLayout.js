import { graphql } from 'gatsby';
import 'katex/dist/katex.min.css';
import React from 'react';
import '../styles/main.css';
import '../styles/markdown.css';
import Navbar from './Navbar';
import PageMetadata from './PageMetadata';
import Sidebar from './Sidebar';

export default function Template({ data }) {
  const { markdownRemark: page, allFile: sidebarPaths } = data;
  return (
    <div className='page-container'>
      <PageMetadata title={page.frontmatter.title} description={page.frontmatter.description} />
      <Navbar />
      <Sidebar paths={sidebarPaths} />
      <div className='main-container'>
        <div className='content' dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query PageByPath($path: String!, $pathRegex: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
      }
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
              type
            }
          }
        }
      }
    }
  }
`;
