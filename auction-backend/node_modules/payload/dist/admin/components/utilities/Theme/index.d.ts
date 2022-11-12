import React from 'react';
export declare type Theme = 'light' | 'dark';
export declare type ThemeContext = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    autoMode: boolean;
};
declare const Context: React.Context<ThemeContext>;
export declare const ThemeProvider: React.FC<{
    children?: React.ReactNode;
}>;
export declare const useTheme: () => ThemeContext;
export default Context;
