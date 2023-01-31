import { createContext, useState } from 'react';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import { darkTheme } from '../themeModes/dark';
import { lightTheme } from '../themeModes/light';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

interface IProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState(ThemeType.light);

  function toggleTheme() {
    if (theme === ThemeType.light) {
      setTheme(ThemeType.dark);
    } else {
      setTheme(ThemeType.light);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderSC theme={themes[theme]}>{children}</ThemeProviderSC>
    </ThemeContext.Provider>
  );
};
