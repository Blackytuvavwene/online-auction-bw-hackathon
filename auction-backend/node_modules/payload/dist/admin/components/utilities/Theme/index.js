import React, { createContext, useCallback, useContext, useState, } from 'react';
const initialContext = {
    theme: 'light',
    setTheme: () => null,
    autoMode: true,
};
const Context = createContext(initialContext);
const localStorageKey = 'payload-theme';
const getTheme = () => {
    let theme;
    const themeFromStorage = window.localStorage.getItem(localStorageKey);
    if (themeFromStorage === 'light' || themeFromStorage === 'dark') {
        theme = themeFromStorage;
    }
    else {
        theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
};
export const ThemeProvider = ({ children }) => {
    const [theme, setThemeState] = useState(getTheme);
    const [autoMode, setAutoMode] = useState(() => {
        const themeFromStorage = window.localStorage.getItem(localStorageKey);
        return !themeFromStorage;
    });
    const setTheme = useCallback((themeToSet) => {
        if (themeToSet === 'light' || themeToSet === 'dark') {
            setThemeState(themeToSet);
            setAutoMode(false);
            window.localStorage.setItem(localStorageKey, themeToSet);
            document.documentElement.setAttribute('data-theme', themeToSet);
        }
        else if (themeToSet === 'auto') {
            const existingThemeFromStorage = window.localStorage.getItem(localStorageKey);
            if (existingThemeFromStorage)
                window.localStorage.removeItem(localStorageKey);
            const themeFromOS = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', themeFromOS);
            setAutoMode(true);
            setThemeState(themeFromOS);
        }
    }, []);
    return (React.createElement(Context.Provider, { value: { theme, setTheme, autoMode } }, children));
};
export const useTheme = () => useContext(Context);
export default Context;
