import { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from './themes';

type ThemeContextType = {
  theme: "claro" | "escuro";
  toggleTheme: () => void;
};

type ThemeProviderProps = { children: ReactNode };

const ThemeContext = createContext<ThemeContextType>({
  theme: "claro",
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"claro" | "escuro">("claro");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "claro" ? "escuro" : "claro"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themes[theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};