import { graphql } from 'gatsby';
import 'katex/dist/katex.min.css';
import React, { useCallback, useState } from 'react';
//import '../styles/main.css';
//import '../styles/markdown.css';
import { customComponents } from '../utils/customComponents';
import Navbar from './Navbar';
import PageMetadata from './PageMetadata';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';
import SiteTitle from './SiteTitle';

export default function Template({ data }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => setSidebarOpen((open) => !open), [setSidebarOpen]);

  const { markdownRemark: page, allFile: sidebarPaths } = data;

  const components = page.frontmatter?.components
    ?.map((componentPath) => customComponents[componentPath])
    .filter((comp) => comp);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"site-title . search search"
      "sidebar main main main"
      "footer footer footer footer"`,
      }}
    >
      <PageMetadata title={page.frontmatter.title} description={page.frontmatter.description} />
      <Box sx={{ gridArea: 'site-title' }}>
        <SiteTitle />
      </Box>
      <Box sx={{ gridArea: 'sidebar' }}>
        <Sidebar paths={sidebarPaths} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </Box>
      <Box sx={{ gridArea: 'main' }}>
        <div className='content' dangerouslySetInnerHTML={{ __html: page.html }} />
        {components?.map((Component, i) => (
          <Component key={i} />
        ))}
      </Box>
      <Box sx={{ gridArea: 'footer' }}>Footer</Box>
    </Box>
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
