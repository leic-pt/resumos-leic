import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import ExternalLink from './ExternalLink';
import SearchBar from './SearchBar';
import ThemeSettings from './ThemeSettings';

const Navbar = ({ toggleSidebar }) => {
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
      {toggleSidebar && (
        <button className='sidebar-button' onClick={toggleSidebar}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            aria-hidden='true'
            role='img'
            viewBox='0 0 448 512'
            className='icon'
          >
            <path
              fill='currentColor'
              d='M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z'
            ></path>
          </svg>
        </button>
      )}
      <Link to='/' className='site-title'>
        {data.site.siteMetadata.navbar.siteTitle}
      </Link>
      <div className='flex-grow' />
      <SearchBar />
      <ThemeSettings />
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
