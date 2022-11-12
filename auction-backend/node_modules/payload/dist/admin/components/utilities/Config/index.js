import React, { createContext, useContext } from 'react';
const Context = createContext({});
export const ConfigProvider = ({ children, config }) => (React.createElement(Context.Provider, { value: config }, children));
export const useConfig = () => useContext(Context);
