import React, { createContext, useContext, } from 'react';
const Context = createContext(false);
export const GroupProvider = ({ children, withinGroup = true }) => {
    return (React.createElement(Context.Provider, { value: withinGroup }, children));
};
export const useGroup = () => useContext(Context);
export default Context;
