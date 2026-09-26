import { useLayoutEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useTrapFocus } from '../../hooks/useTrapFocus';
import useViewHeightCSS from '../../hooks/useViewHeightCSS';
import './Dialog.css';

const BODY_DIALOG_OPEN_CLASSNAME = 'body--dialog-open';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  label: string;
}

const Dialog = ({ open, onClose, children, label }: DialogProps) => {
  useLayoutEffect(() => {
    if (open) {
      document.body.classList.add(BODY_DIALOG_OPEN_CLASSNAME);
    } else {
      document.body.classList.remove(BODY_DIALOG_OPEN_CLASSNAME);
    }

    return () => {
      document.body.classList.remove(BODY_DIALOG_OPEN_CLASSNAME);
    };
  }, [open]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  useTrapFocus({ containerRef, active: open });
  useViewHeightCSS(open);

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      className='dialog-container'
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          event.preventDefault();
          onClose();
        }
      }}
    >
      <div
        ref={containerRef}
        className='dialog-modal'
        role='dialog'
        aria-modal='true'
        aria-label={label}
        tabIndex={-1}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Dialog;
