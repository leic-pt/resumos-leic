import { graphql } from 'gatsby';
import 'katex/dist/katex.min.css';
import React, { useCallback, useState } from 'react';
//import '../styles/main.css';
//import '../styles/markdown.css';
import { customComponents } from '../utils/customComponents';
import Navbar from './Navbar';
import PageMetadata from './PageMetadata';
import Sidebar from './Sidebar';

export default function Template({ data }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => setSidebarOpen((open) => !open), [setSidebarOpen]);

  const { markdownRemark: page, allFile: sidebarPaths } = data;

  const components = page.frontmatter?.components
    ?.map((componentPath) => customComponents[componentPath])
    .filter((comp) => comp);

  return (
    <div className={`page-container ${sidebarOpen ? `sidebar-open` : ``}`}>
      {/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className='sidebar-mask' onClick={toggleSidebar} />
      <PageMetadata title={page.frontmatter.title} description={page.frontmatter.description} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar paths={sidebarPaths} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className='main-container'>
        <div className='content' dangerouslySetInnerHTML={{ __html: page.html }} />
        {components?.map((Component, i) => (
          <Component key={i} />
        ))}
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
        components
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
