import React, { createContext, useContext, } from 'react';
const Context = createContext(false);
export const CollapsibleProvider = ({ children, withinCollapsible = true }) => {
    return (React.createElement(Context.Provider, { value: withinCollapsible }, children));
};
export const useCollapsible = () => useContext(Context);
export default Context;
