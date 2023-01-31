import React, { useContext } from 'react';
import { ThemeContext, ThemeType } from '../../../theme';
import ReactSwitch from 'react-switch';

export const Icon = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDarkMode: any = theme === ThemeType.dark;

  return (
    <div>
      <ReactSwitch onChange={toggleTheme} checked={isDarkMode} />
    </div>
  );
};
