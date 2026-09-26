import React from 'react';
import type { SearchHit } from './autocomplete';

interface HighlightProps extends React.HTMLAttributes<HTMLElement> {
  component?: React.ElementType;
  hit: SearchHit;
  attribute: string;
}

const Highlight = ({ component = 'p', hit, attribute, ...props }: HighlightProps) => {
  const Component = component;
  if (hit._formatted?.[attribute]) {
    return (
      <Component
        dangerouslySetInnerHTML={{
          __html: String(hit._formatted[attribute]),
        }}
        {...props}
      />
    );
  }
  return <Component {...props}>{hit[attribute] as string}</Component>;
};

export default Highlight;
