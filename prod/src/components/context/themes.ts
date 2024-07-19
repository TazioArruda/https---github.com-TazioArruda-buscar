import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  background: "#fff",
  color: "#000",
};

const darkTheme: DefaultTheme = {
  background: "#000",
  color: "#fff",
};

export const themes = {
  claro: lightTheme,
  escuro: darkTheme,
};