import { useStaticQuery, graphql } from 'gatsby';
import React, { useMemo } from 'react';
import ExternalLink from './ExternalLink';

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
        const labels = [
          ...contributor.labels.map(getLabelName).filter(Boolean),
          ...(contributor.additionalLabels || []),
        ]
          .map((label) => ({ label, bold: contributor?.boldLabels?.includes(label) ?? false }))
          .sort((a, b) => a.label.localeCompare(b.label))
          .sort((a, b) => b.bold - a.bold);
        return {
          username: contributor.username,
          name: contributor.name,
          labels,
          boldCount: labels.filter(({ bold }) => bold).length,
        };
      })
      .filter((contributor) => contributor?.labels?.length > 0)
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => b.labels.length - a.labels.length)
      .sort((a, b) => b.boldCount - a.boldCount);
  }, [contributors, getLabelName]);

  return (
    <ul>
      {sortedContributors.map((contributor) => (
        <li key={contributor.username}>
          <ExternalLink
            href={`https://github.com/${owner}/${repository}/commits?author=${encodeURIComponent(
              contributor.username
            )}`}
          >
            {contributor.name}
          </ExternalLink>
          {' ('}
          {contributor.labels.map(({ label, bold }, index) => (
            <React.Fragment key={label}>
              {index > 0 && ', '}
              {bold ? <strong>{label}</strong> : label}
            </React.Fragment>
          ))}
          )
        </li>
      ))}
    </ul>
  );
};

export default Contributors;
