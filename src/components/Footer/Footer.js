import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import GitHubLogo from '../icons/GitHub';
import ExternalLink from '../ExternalLink';
import './Footer.css';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          footer {
            githubLink
            contributionGuideLink
            contributorsLink
            owner {
              name
              website
            }
          }
        }
      }
    }
  `);

  const { githubLink, contributionGuideLink, contributorsLink, owner } =
    data.site.siteMetadata.footer;

  return (
    <footer>
      <hr />
      <div className='footer-attributions'>
        <span>
          <ExternalLink href={githubLink}>Website</ExternalLink>
          <GitHubLogo className='footer-github-logo' /> by{' '}
          <ExternalLink href={owner.website}>{owner.name}</ExternalLink> with ❤️
        </span>
        <span>
          <ExternalLink href={contributionGuideLink}>How to Contribute</ExternalLink>
        </span>
        <span>
          Content by <ExternalLink href={contributorsLink}>many awesome contributors</ExternalLink>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
