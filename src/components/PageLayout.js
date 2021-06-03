import React from 'react';
import { graphql } from 'gatsby';

import 'katex/dist/katex.min.css';
import '../styles/main.css';
import '../styles/markdown.css';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <div className='blog-post-container'>
      <div className='blog-post'>
        <h1>{post.frontmatter}</h1>
        <div className='blog-post-content' dangerouslySetInnerHTML={{ __html: post.html }} />
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
