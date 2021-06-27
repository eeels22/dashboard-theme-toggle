// NPM packages
import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Create the context objects
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

// Custom hooks provide easy access to context values
export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

// Wraps logic for our state
export function ThemeProvider({ children }) {
  // First arg is key to the value in local storage, second arg is default value
  const [darkTheme, setDarkTheme] = useLocalStorage("theme", "light");

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) =>
      prevDarkTheme === "dark" ? "light" : "dark"
    );
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
