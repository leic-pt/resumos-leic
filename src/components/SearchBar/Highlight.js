import React from 'react';

const Highlight = ({ component = 'p', hit, attribute, ...props }) => {
  const Component = component;
  if (hit._formatted[attribute]) {
    return (
      <Component
        dangerouslySetInnerHTML={{
          __html: hit._formatted[attribute],
        }}
        {...props}
      />
    );
  }
  return <Component {...props}>{hit[attribute]}</Component>;
};

export default Highlight;
