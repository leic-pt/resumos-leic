import React, { useCallback, useMemo, useState } from 'react';
import DropdownArrow from '../../icons/DropdownArrow';
import './DropdownSelect.css';

const DropdownContext = React.createContext({ id: 'unknown', value: null, onChange: () => {} });

const DropdownSelect = ({ id = 'unknown', value, onChange, children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen((v) => !v), [setOpen]);
  const close = useCallback(() => setOpen(false), [setOpen]);

  const options = useMemo(() => {
    const opts = [];

    React.Children.forEach(children, (node) => {
      opts.push({
        value: node.props.value,
        label: node.props.children,
      });
    });

    return opts;
  }, [children]);

  const selectedOption = useMemo(
    () => options.find((o) => o.value === value)?.label || '',
    [value, options]
  );

  const handleChange = useCallback(
    (value) => {
      onChange(value);
      close();
    },
    [onChange, close]
  );

  return (
    <div
      className='dropdown-select'
      onBlur={(e) => !e.relatedTarget?.classList?.contains(`keep-focus-${id}`) && close()}
    >
      <button onClick={toggleOpen} className={`keep-focus-${id}`}>
        <span>{selectedOption}</span>
        <DropdownArrow />
      </button>
      <div className='position-helper'>
        <div className={`options-container${open ? ' options-container--open' : ''}`}>
          <div
            className='options-container-backdrop'
            role='button'
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
