import React, { createContext, useContext, } from 'react';
const Context = createContext(false);
export const TabsProvider = ({ children, withinTab = true }) => {
    return (React.createElement(Context.Provider, { value: withinTab }, children));
};
export const useTabs = () => useContext(Context);
export default Context;
