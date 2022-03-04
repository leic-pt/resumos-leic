import Box from '@mui/material/Box';
import { graphql } from 'gatsby';
import 'katex/dist/katex.min.css';
import React, { useCallback, useState } from 'react';
//import '../styles/main.css';
//import '../styles/markdown.css';
import { customComponents } from '../utils/customComponents';
import MarkdownContent from './MarkdownContent';
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
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <PageMetadata title={page.frontmatter.title} description={page.frontmatter.description} />
      <Box>
        <Sidebar paths={sidebarPaths} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Navbar title={page.frontmatter.title} />
        <Box sx={{ mx: 5, flexGrow: 1 }}>
          <MarkdownContent htmlAst={page.htmlAst} />
          {components?.map((Component, i) => (
            <Component key={i} />
          ))}
        </Box>
        <Box sx={{ backgroundColor: 'red' }}>Footer</Box>
      </Box>
    </Box>
  );
}

export const pageQuery = graphql`
  query PageByPath($path: String!, $pathRegex: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
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
