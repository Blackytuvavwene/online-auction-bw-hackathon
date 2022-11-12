import React from 'react';
import { useConfig } from '../Config';
const NestProviders = ({ providers, children }) => {
    const Component = providers[0];
    if (providers.length > 1) {
        return (React.createElement(Component, null,
            React.createElement(NestProviders, { providers: providers.slice(1) }, children)));
    }
    return (React.createElement(Component, null, children));
};
export const CustomProvider = ({ children }) => {
    const config = useConfig();
    const { admin: { components: { providers, }, }, } = config;
    if (Array.isArray(providers) && providers.length > 0) {
        return (React.createElement(NestProviders, { providers: providers }, children));
    }
    return (React.createElement(React.Fragment, null, children));
};
