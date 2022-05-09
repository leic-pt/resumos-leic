import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTrapFocus } from '../../hooks/useTrapFocus';
import useViewHeightCSS from '../../hooks/useViewHeightCSS';
import './Dialog.css';

const BODY_DIALOG_OPEN_CLASSNAME = 'body--dialog-open';

const Dialog = ({ open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add(BODY_DIALOG_OPEN_CLASSNAME);
    } else {
      document.body.classList.remove(BODY_DIALOG_OPEN_CLASSNAME);
    }

    return () => {
      document.body.classList.remove(BODY_DIALOG_OPEN_CLASSNAME);
    };
  }, [open]);

  const containerRef = React.useRef(null);
  useTrapFocus({ container: containerRef.current });
  useViewHeightCSS(open);

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      ref={containerRef}
      className='dialog-container'
      role='button'
      tabIndex={0}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className='dialog-modal'>{children}</div>
    </div>,
    document.body
  );
};

export default Dialog;
