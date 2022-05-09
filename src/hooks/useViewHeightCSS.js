// We rely on a CSS variable to define a custom vh unit
// because all mobile browsers don't compute their height the same way.
// See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

import React from 'react';

const useViewHeightCSS = () => {
  React.useEffect(() => {
    const updateViewportHeight = () => {
      console.log('updating');
      if (document?.body && window) {
        const vh = window.innerHeight * 0.01;
        document.body.style.setProperty('--vh', `${vh}px`);
      }
    };

    updateViewportHeight();

    if (window) {
      window.addEventListener('resize', updateViewportHeight);
    }

    return () => {
      if (window) {
        window.removeEventListener('resize', updateViewportHeight);
      }
    };
  }, []);
};

export default useViewHeightCSS;
