import { Children, createContext, useCallback, useMemo, useState } from 'react';
import type { ReactElement, ReactNode } from 'react';
import DropdownArrow from '../../icons/DropdownArrow';
import './DropdownSelect.css';

interface DropdownContextValue {
  id: string;
  value: string | null;
  onChange: (value: string) => void;
}

const DropdownContext = createContext<DropdownContextValue>({
  id: 'unknown',
  value: null,
  onChange: () => {},
});

interface DropdownSelectProps {
  id?: string;
  value: string | null;
  onChange: (value: string) => void;
  children: ReactNode;
}

const DropdownSelect = ({ id = 'unknown', value, onChange, children }: DropdownSelectProps) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen((v) => !v), [setOpen]);
  const close = useCallback(() => setOpen(false), [setOpen]);

  const options = useMemo(() => {
    const opts: Array<{ value: string; label: ReactNode }> = [];

    Children.forEach(children, (node) => {
      const element = node as ReactElement<{ value?: string; children?: ReactNode }>;
      opts.push({
        value: element.props.value ?? '',
        label: element.props.children,
      });
    });

    return opts;
  }, [children]);

  const selectedOption = useMemo(
    () => options.find((o) => o.value === value)?.label || '',
    [value, options]
  );

  const handleChange = useCallback(
    (value: string) => {
      onChange(value);
      close();
    },
    [onChange, close]
  );

  return (
    <div
      className='dropdown-select'
      role='none'
      onBlur={(e) =>
        !(e.relatedTarget as Element | null)?.classList?.contains(`keep-focus-${id}`) && close()
      }
    >
      <button onClick={toggleOpen} className={`keep-focus-${id}`}>
        <span>{selectedOption}</span>
        <DropdownArrow />
      </button>
      <div className='position-helper'>
        <div className={`options-container${open ? ' options-container--open' : ''}`}>
          <div
            className='options-container-backdrop'
            role='none'
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                toggleOpen();
              }
            }}
          />
          <div className='options'>
            <DropdownContext.Provider
              value={{
                id,
                value,
                onChange: handleChange,
              }}
            >
              {children}
            </DropdownContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownSelect;

export { DropdownContext };
