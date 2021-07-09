import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import ExternalLink from './ExternalLink';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      site {
        siteMetadata {
          navbar {
            siteTitle
            links {
              href
              title
            }
          }
        }
      }
    }
  `);

  return (
    <header className='navbar'>
      <Link to='/' className='site-title'>
        {data.site.siteMetadata.navbar.siteTitle}
      </Link>
      <div className='navbar-links'>
        {data.site.siteMetadata.navbar.links.map(({ href, title }) => (
          <ExternalLink href={href} key={href}>
            {title}
          </ExternalLink>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
