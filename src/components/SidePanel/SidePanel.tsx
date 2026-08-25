import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useTrapFocus } from '../../hooks/useTrapFocus';
import useViewHeightCSS from '../../hooks/useViewHeightCSS';
import './SidePanel.css';

const BODY_SIDEPANEL_OPEN_CLASSNAME = 'body--sidepanel-open';

interface SidePanelProps {
  open: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}

const SidePanel = ({ open, onClose, className, children }: SidePanelProps) => {
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

  const containerRef = useRef<HTMLDivElement | null>(null);
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
        aria-label='close sidepanel'
        tabIndex={0}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      />
      <div className={`sidepanel-modal ${className}`}>{children}</div>
    </div>,
    document.body
  );
};

export default SidePanel;
