import { Link } from 'gatsby';
import React from 'react';

export default function Sidebar({ paths }) {
  return (
    <div>
      <ul>
        {paths.edges.map((v) => {
          const { path, title } = v.node.childMarkdownRemark.frontmatter;
          return (
            <li key={path}>
              <Link to={path}>{title || path}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
