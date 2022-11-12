import React, { createContext, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
const Context = createContext({});
export const SearchParamsProvider = ({ children }) => {
    const location = useLocation();
    const params = qs.parse(location.search, { ignoreQueryPrefix: true, depth: 10 });
    return (React.createElement(Context.Provider, { value: params }, children));
};
export const useSearchParams = () => useContext(Context);
