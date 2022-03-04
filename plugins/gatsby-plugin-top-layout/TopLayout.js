import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '../../src/components/ThemeContextProvider';

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css?family=Open+Sans:400,500,700&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <ThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
