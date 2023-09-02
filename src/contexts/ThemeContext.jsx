import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  return <ThemeContext.Provider value={''}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('The "useTheme" custom hook must be only used inside "ThemeProvider"');

  return context;
}
