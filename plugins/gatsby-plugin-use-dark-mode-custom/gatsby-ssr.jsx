import * as React from 'react';

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key='gatsby-plugin-use-dark-mode'
      id='gatsby-plugin-use-dark-mode'
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        // populated in gatsby-node via Webpack's DefinePlugin
        __html: String(process.env.GATSBY_PLUGIN_USE_DARK_MODE_NO_FLASH_SCRIPT),
      }}
    />,
  ]);
};
