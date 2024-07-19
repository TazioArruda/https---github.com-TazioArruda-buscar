import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const lightTheme = {
  background: "#fff",
  color: "#000",
};

const darkTheme = {
  background: "#000",
  color: "#fff",
};

export const themes = {
  claro: lightTheme,
  escuro: darkTheme,
};

type StyledThemeProviderProps = {
  children: React.ReactNode;
  theme: "claro" | "escuro";
};

const ThemeProvider = ({ children, theme }: StyledThemeProviderProps) => (
  <StyledThemeProvider theme={themes[theme]}>
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
