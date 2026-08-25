import type { AutocompleteApi } from '@algolia/autocomplete-core';
import React from 'react';
import { stripDomainFromLink } from './autocomplete';
import type { SearchHit } from './autocomplete';
import Highlight from './Highlight';

interface HitProps {
  hit: SearchHit;
  source: Parameters<AutocompleteApi<SearchHit>['getItemProps']>[0]['source'];
  getItemProps: AutocompleteApi<SearchHit>['getItemProps'];
  onItemClick: (item: SearchHit) => void;
}

const Hit = ({ hit, source, getItemProps, onItemClick }: HitProps) => {
  const targetLink = stripDomainFromLink(hit.url);

  return (
    <li
      className='search-hit-item'
      {...(getItemProps({
        item: hit,
        source,
        onClick() {
          onItemClick(hit);
        },
      }) as unknown as React.LiHTMLAttributes<HTMLLIElement>)}
    >
      <a href={targetLink} className='search-hit'>
        <p className='search-hit--page-path'>
          {[1, 2, 3, 4, 5, 6]
            .map((level) => `hierarchy_lvl${level}`)
            .filter((attr) => !!hit[attr])
            .map((attribute) => (
              <Highlight component='span' key={attribute} attribute={attribute} hit={hit} />
            ))
            .reduce<React.ReactElement[]>((acc, el, i) => {
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
        {Boolean(hit.content) && (
          <Highlight className='search-hit--content' attribute='content' hit={hit} />
        )}
      </a>
    </li>
  );
};

export default Hit;
