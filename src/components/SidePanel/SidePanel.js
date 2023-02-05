import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTrapFocus } from '../../hooks/useTrapFocus';
import useViewHeightCSS from '../../hooks/useViewHeightCSS';
import './SidePanel.css';

const BODY_SIDEPANEL_OPEN_CLASSNAME = 'body--sidepanel-open';

const Dialog = ({ open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add(BODY_SIDEPANEL_OPEN_CLASSNAME);
    } else {
      document.body.classList.remove(BODY_SIDEPANEL_OPEN_CLASSNAME);
    }

    return () => {
      document.body.classList.remove(BODY_SIDEPANEL_OPEN_CLASSNAME);
    };
  }, [open]);

  const containerRef = React.useRef(null);
  useTrapFocus({ container: containerRef.current });
  useViewHeightCSS(open);

  if (typeof window !== 'object') {
    return null;
  }

  return createPortal(
    <div className={`sidepanel-container${open ? ` sidepanel-container--open` : ``}`}>
      <div
        className='sidepanel-backdrop'
        ref={containerRef}
        role='button'
        tabIndex={0}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      />
      <div className='sidepanel-modal'>{children}</div>
    </div>,
    document.body
  );
};

export default Dialog;
