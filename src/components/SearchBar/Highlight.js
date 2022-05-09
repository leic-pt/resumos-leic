import React from 'react';

const Highlight = ({ component = 'p', hit, attribute, ...props }) => {
  if (hit._formatted[attribute]) {
    return (
      <component
        dangerouslySetInnerHTML={{
          __html: hit._formatted[attribute],
        }}
        {...props}
      />
    );
  }
  return <component {...props}>{hit[attribute]}</component>;
};

export default Highlight;
