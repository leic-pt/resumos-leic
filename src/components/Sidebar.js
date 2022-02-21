import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Paper,
  Toolbar,
} from '@mui/material';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React from 'react';
import SiteTitle from './SiteTitle';

const drawerWidth = '20rem';

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
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'
    >
      <Toolbar>
        <SiteTitle />
      </Toolbar>
      <Divider />
      <List dense>
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
