import { Link } from 'gatsby';
import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';

const stripDomainFromLink = (url) => {
  if (!url) return '/';

  const parsedUrl = new URL(url);
  return parsedUrl.href.replace(parsedUrl.origin, '');
};

const Hit = ({ hit }) => {
  const targetLink = stripDomainFromLink(hit.url);

  return (
    <Link to={targetLink} className='search-hit'>
      <p className='search-hit--section'>
        <Nullable attribute='hierarchy_lvl0' hit={hit} />
      </p>
      <p className='search-hit--page-path'>
        {[1, 2, 3, 4, 5, 6]
          .map((level) => `hierarchy_lvl${level}`)
          .filter((attr) => !!hit[attr])
          .map((attribute) => <Nullable key={attribute} attribute={attribute} hit={hit} />)
          .reduce((acc, el, i) => {
            if (i === 0) {
              return [...acc, el];
            }
            return [
              ...acc,
              <span className='search-hit--page-path__separator' key={`separator-${i}`}>
                {' > '}
              </span>,
              el,
            ];
          }, [])}
      </p>
      {hit.content && <Snippet attribute='content' hit={hit} />}
    </Link>
  );
};

export default Hit;
