import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useTrapFocus } from '../../hooks/useTrapFocus';
import useViewHeightCSS from '../../hooks/useViewHeightCSS';
import './SidePanel.css';

const BODY_SIDEPANEL_OPEN_CLASSNAME = 'body--sidepanel-open';

interface SidePanelProps {
  open: boolean;
  onClose: () => void;
  label: string;
  className?: string;
  children: ReactNode;
}

const SidePanel = ({ open, onClose, label, className, children }: SidePanelProps) => {
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

  // Mount the portal only after hydration: React 19 hydrates portal contents
  // against the server HTML, so the initial client render must match the SSR
  // output (which renders nothing here) exactly.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useTrapFocus({ containerRef, active: mounted && open });
  useViewHeightCSS(open);

  if (!mounted || typeof window !== 'object') {
    return null;
  }

  return createPortal(
    <div className={`sidepanel-container${open ? ` sidepanel-container--open` : ``}`}>
      <div
        className='sidepanel-backdrop'
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            event.preventDefault();
            onClose();
          }
        }}
      />
      <div
        ref={containerRef}
        className={`sidepanel-modal${className ? ` ${className}` : ``}`}
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

export default SidePanel;
