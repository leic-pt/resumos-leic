import { graphql } from 'gatsby';
import 'katex/dist/katex.min.css';
import React, { useCallback, useState } from 'react';
import { CurrentSectionProvider } from '../hooks/useCurrentSection';
import '../styles/main.css';
import '../styles/markdown.css';
import { customComponents } from '../utils/customComponents';
import Footer from './Footer';
import Edit from './icons/Edit';
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

  const currentSection = sidebarPaths.edges.find(
    (page) => page.node.childMarkdownRemark.frontmatter.type === 'topLevelPage'
  )?.node.childMarkdownRemark.frontmatter.title;

  const { relativePath } = page.parent;
  const githubLink = relativePath
    ? `${data.site.siteMetadata.footer.githubLink}/edit/master/content/${relativePath}`
    : null;

  return (
    <CurrentSectionProvider value={currentSection}>
      <div className={`page-container ${sidebarOpen ? `sidebar-open` : ``}`}>
        {/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div className='sidebar-mask' onClick={toggleSidebar} />
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar paths={sidebarPaths} sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className='main-container'>
          {githubLink && (
            <a href={githubLink} className='edit-link'>
              <Edit /> Edit page
            </a>
          )}
          <div className='content' dangerouslySetInnerHTML={{ __html: page.html }} />
          {components?.map((Component, i) => (
            <Component key={i} />
          ))}
          <div style={{ flexGrow: 1 }} />
          <Footer />
        </div>
      </div>
    </CurrentSectionProvider>
  );
}

export const pageQuery = graphql`
  query PageByPath($markdownRemarkId: String!, $pathRegex: String!) {
    markdownRemark(id: { eq: $markdownRemarkId }) {
      html
      frontmatter {
        title
        description
        components
      }
      parent {
        ... on File {
          relativePath
        }
      }
    }
    allFile(
      filter: {
        childMarkdownRemark: { frontmatter: { path: { regex: $pathRegex } } }
        extension: { eq: "md" }
      }
      sort: { relativePath: ASC }
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
    site {
      siteMetadata {
        footer {
          githubLink
        }
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { markdownRemark: page } = data;
  return <PageMetadata title={page.frontmatter.title} description={page.frontmatter.description} />;
};
