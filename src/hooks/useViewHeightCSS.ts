// We rely on a CSS variable to define a custom vh unit
// because all mobile browsers don't compute their height the same way.
// See https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

import { useEffect } from 'react';

const useViewHeightCSS = (active: boolean): void => {
  useEffect(() => {
    if (!active) return;

    const updateViewportHeight = () => {
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
  }, [active]);
};

export default useViewHeightCSS;
