import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  if (!open) {
    return null;
  }

  return createPortal(
    <div className='dialog-container'>
      <div className='dialog-modal'>{children}</div>
    </div>,
    document.body
  );
};

export default Dialog;
