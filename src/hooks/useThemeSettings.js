import { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContextProvider';

const useThemeSettings = () => {
  return useContext(ThemeContext);
};

export default useThemeSettings;
