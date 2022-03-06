import { Link as MuiLink } from '@mui/material';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';

const SmartLink = React.forwardRef(({ href, children, ...props }, ref) => {
  if (!href || /^\w+:\/\//.test(href)) {
    // External Link
    return (
      <MuiLink href={href} target='_blank' rel='noopener noreferrer' {...props}>
        {children}
      </MuiLink>
    );
  }
  return (
    <MuiLink to={href} innerRef={ref} component={GatsbyLink} {...props}>
      {children}
    </MuiLink>
  );
});

export default SmartLink;
