interface DropdownArrowProps {
  size?: number;
}

const DropdownArrow = ({ size = 24 }: DropdownArrowProps) => {
  return (
    <svg style={{ width: size, height: size }} viewBox='0 0 24 24'>
      <path fill='currentColor' d='M7 10l5 5 5-5z' />
    </svg>
  );
};

export default DropdownArrow;
