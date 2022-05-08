import { Link } from 'gatsby';
import React from 'react';
import { stripDomainFromLink } from './autocomplete';

const Hit = ({ hit, source, getItemProps }) => {
  const targetLink = stripDomainFromLink(hit.url);

  return (
    <li className='search-hit-item' {...getItemProps({ item: hit, source })}>
      <Link to={targetLink} className='search-hit'>
        <p className='search-hit--section'>{hit.hierarchy_lvl0}</p>
        <p className='search-hit--page-path'>
          {[1, 2, 3, 4, 5, 6]
            .map((level) => `hierarchy_lvl${level}`)
            .filter((attr) => !!hit[attr])
            //.map((attribute) => <Highlight key={attribute} attribute={attribute} hit={hit} />)
            .map((attribute) => hit[attribute])
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
        {hit.content /*&& <Snippet attribute='content' hit={hit} />*/}
      </Link>
    </li>
  );
};

export default Hit;
