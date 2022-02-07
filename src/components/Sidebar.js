import { Drawer, List, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import ExternalLink from './ExternalLink';

export default function Sidebar({ paths, sidebarOpen, toggleSidebar }) {
  const data = useStaticQuery(graphql`
    query SidebarQuery {
      site {
        siteMetadata {
          sidebarSections {
            key
            name
          }
          navbar {
            links {
              href
              title
            }
          }
        }
      }
    }
  `);
  const sidebarSections = [...data.site.siteMetadata.sidebarSections].map((v) => ({ ...v }));

  paths.edges.forEach((v) => {
    const { path, title, type } = v.node.childMarkdownRemark.frontmatter;

    const section = sidebarSections.find((sec) => sec.key === type);
    if (section) {
      const sectionLinks = section.links || (section.links = []);
      sectionLinks.push({ path, title });
    }
  });

  return (
    <Drawer variant='permanent' anchor='left'>
      <List>
        {sidebarSections.map(
          (section) =>
            section.links && (
              <>
                {section.name && <ListSubheader>{section.name}</ListSubheader>}
                {section.links.map((v) => {
                  const { path, title } = v;
                  return (
                    <ListItemButton key={path} to={path} component={GatsbyLink}>
                      <ListItemText primary={title || path} />
                    </ListItemButton>
                  );
                })}
              </>
            )
        )}
        {/*<div className='sidebar-nav-links'>
        <hr />
        <ul>
          {data.site.siteMetadata.navbar.links.map(({ href, title }) => (
            <li key={href}>
              <ExternalLink href={href}>{title}</ExternalLink>
            </li>
          ))}
        </ul>
          </div>*/}
      </List>
    </Drawer>
  );
}
