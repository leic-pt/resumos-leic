import React, { useCallback, useMemo, useState } from 'react';
import DropdownArrow from '../../icons/DropdownArrow';
import './DropdownSelect.css';

const DropdownSelect = ({ value, onChange, children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = useCallback(() => setOpen((v) => !v), [setOpen]);

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
    [value, children]
  );

  return (
    <div className='dropdown-select'>
      <button onClick={toggleOpen}>
        <span>{selectedOption}</span>
        <DropdownArrow />
      </button>
      <div className='position-helper'>
        <div className={`options-container${open ? ' options-container--open' : ''}`}>
          <div
            className='options-container-backdrop'
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                toggleOpen();
              }
            }}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DropdownSelect;
