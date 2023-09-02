import ThemeProvider from './ThemeContext';

function ContextsProvider({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default ContextsProvider;
