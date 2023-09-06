import { createContext, useContext, useEffect, useReducer } from 'react';

const ThemeContext = createContext(null);

const initialState = localStorage.getItem('theme')
  ? JSON.parse(localStorage.getItem('theme'))
  : {
      font: 'serif',
      color: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    };

function reducer(state, action) {
  switch (action.type) {
    case 'theme/setFont':
      return { ...state, font: action.payload };
    case 'theme/setColor':
      return { ...state, color: action.payload };
    default:
      return state;
  }
}

export default function ThemeProvider({ children }) {
  const [{ font, color }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify({ font, color }));
    document.children[0].dataset.font = font;
    document.children[0].dataset.theme = color;
  }, [font, color]);

  const setFont = (value) => dispatch({ type: 'theme/setFont', payload: value });
  const setColor = (value) => dispatch({ type: 'theme/setColor', payload: value });

  return (
    <ThemeContext.Provider value={{ font, color, setFont, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('The "useTheme" custom hook must be only used inside "ThemeProvider"');

  return context;
}
