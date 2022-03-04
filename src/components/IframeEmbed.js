import { Box } from '@mui/material';
import React from 'react';

const IframeEmbed = (props) => {
  return (
    <Box
      sx={{
        my: 3,
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        '&:after': {
          content: '""',
          display: 'block',
          paddingTop: '56.25%',
        },
        '& iframe': { height: '100%', width: '100%', left: 0, top: 0, position: 'absolute' },
      }}
    >
      <iframe title='Markdown Embed' {...props} />
    </Box>
  );
};

export default IframeEmbed;
