import CloseIcon from '@mui/icons-material/CloseRounded';
import {
  Divider,
  Drawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Toolbar,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import { graphql, Link as GatsbyLink, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import SiteTitle from './SiteTitle';

export const drawerWidth = '20rem';

const StyledListItemButton = styled(ListItemButton)({
  borderRadius: '0.5em',
  margin: '0.2em 0.4em',
  padding: '0.15rem 0.7em',
});

const DrawerList = ({ sidebarSections, toggleSidebar }) => {
  return (
    <>
      <Toolbar>
        <MuiLink to='/' component={Link} color='secondary' underline='none' sx={{ flexGrow: 1 }}>
          <SiteTitle />
        </MuiLink>
        {toggleSidebar && (
          <IconButton
            onClick={toggleSidebar}
            color='inherit'
            aria-label='close drawer'
            sx={{ mr: 1 }}
          >
            <CloseIcon />
          </IconButton>
        )}
      </Toolbar>
      <Divider />
      <Box sx={{ overflowY: 'auto' }}>
        <List dense>
          {sidebarSections.map(
            (section) =>
              section.links && (
                <React.Fragment key={section.name}>
                  {section.name && <ListSubheader>{section.name}</ListSubheader>}
                  {section.links.map((v) => {
                    const { path, title } = v;
                    return (
                      <StyledListItemButton
                        key={path}
                        to={path}
                        activeClassName='Mui-selected'
                        component={GatsbyLink}
                      >
                        <ListItemText primary={title || path} />
                      </StyledListItemButton>
                    );
                  })}
                </React.Fragment>
              )
          )}
        </List>
      </Box>
    </>
  );
};

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
    <>
      <Drawer
        variant='temporary'
        open={sidebarOpen}
        onClose={toggleSidebar}
        anchor='bottom'
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            backgroundImage: 'none',
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            maxHeight: '70vh',
          },
        }}
      >
        <DrawerList sidebarSections={sidebarSections} toggleSidebar={toggleSidebar} />
      </Drawer>
      <Drawer
        sx={{
          display: { xs: 'none', lg: 'block' },
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
        <DrawerList sidebarSections={sidebarSections} />
      </Drawer>
    </>
  );
}
