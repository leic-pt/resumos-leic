import { Link, useStaticQuery, graphql } from 'gatsby';
import React, { useMemo } from 'react';
import ExternalLink from './ExternalLink';
import SearchBar from './SearchBar';
import ThemeSettings from './ThemeSettings';

const Contributors = ({ getLabelName, contributors }) => {
  const data = useStaticQuery(graphql`
    query ContributorsQuery {
      site {
        siteMetadata {
          github {
            owner
            repository
          }
        }
      }
    }
  `);

  const { owner, repository } = data.site.siteMetadata.github;

  const sortedContributors = useMemo(() => {
    return contributors
      .map((contributor) => {
        const labels = contributor.labels
          .map(getLabelName)
          .filter(Boolean)
          .map((label) => ({ label, bold: false }));
        return {
          username: contributor.username,
          name: contributor.name,
          labels,
          boldCount: labels.filter(({ bold }) => bold).length,
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => b.boldCount - a.boldCount)
      .sort((a, b) => b.labels.length - a.labels.length);
  }, [contributors, getLabelName]);

  return (
    <ul>
      {sortedContributors.map((contributor) => (
        <li key={contributor.username}>
          <a
            href={`https://github.com/${owner}/${repository}/commits?author=${encodeURIComponent(
              contributor.username
            )}`}
            target='_blank'
            rel='nofollow noopener noreferrer'
          >
            {contributor.name}
          </a>
          {' ('}
          {contributor.labels.map(({ label, bold }, index) => (
            <>
              {index > 0 && ', '}
              {bold ? <strong>{label}</strong> : label}
            </>
          ))}
          )
        </li>
      ))}
    </ul>
  );
};

export default Contributors;
