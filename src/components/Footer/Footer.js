import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PoweredByVercelLogo from '../../images/powered-by-vercel.svg';
import GitHubLogo from '../icons/GitHub';
import ExternalLink from '../ExternalLink';
import './Footer.css';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          footer {
            contributorsLink
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
    <footer>
      <hr />
      <div className='footer-attributions'>
        <span>
          <ExternalLink href='#'>Website</ExternalLink>
          <GitHubLogo className='footer-github-logo' /> by{' '}
          <ExternalLink href='https://diogotc.com'>Diogo Correia</ExternalLink> with ❤️
        </span>
        <span>
          <ExternalLink href='#'>How to Contribute</ExternalLink>
        </span>
        <span>
          Content by{' '}
          <ExternalLink href={data.site.siteMetadata.footer.contributorsLink}>
            many awesome contributors
          </ExternalLink>
        </span>
        <span>
          <ExternalLink href='https://vercel.com?utm_source=leic-pt&utm_campaign=oss'>
            <img style={{ height: '2.2em' }} src={PoweredByVercelLogo} alt='Powered by Vercel' />
          </ExternalLink>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
