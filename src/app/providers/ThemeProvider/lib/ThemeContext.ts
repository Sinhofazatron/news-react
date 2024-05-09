import {createContext} from "react";

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}
export interface ThemeContextProps {
  theme?: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  setTheme(theme: Theme): void {},
  theme: undefined
})
export const LOCAL_STORAGE_THEME_KEY = 'theme'