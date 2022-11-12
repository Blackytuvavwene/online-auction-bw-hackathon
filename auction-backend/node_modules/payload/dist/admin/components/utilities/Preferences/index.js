import React, { createContext, useCallback, useContext, useEffect, useRef } from 'react';
import { useConfig } from '../Config';
import { useAuth } from '../Auth';
import { requests } from '../../../api';
const Context = createContext({});
const requestOptions = (value) => ({
    body: JSON.stringify({ value }),
    headers: {
        'Content-Type': 'application/json',
    },
});
export const PreferencesProvider = ({ children }) => {
    const contextRef = useRef({});
    const preferencesRef = useRef({});
    const config = useConfig();
    const { user } = useAuth();
    const { serverURL, routes: { api } } = config;
    useEffect(() => {
        if (!user) {
            // clear preferences between users
            preferencesRef.current = {};
        }
    }, [user]);
    const getPreference = useCallback(async (key) => {
        if (typeof preferencesRef.current[key] !== 'undefined')
            return preferencesRef.current[key];
        const promise = new Promise((resolve) => {
            (async () => {
                const request = await requests.get(`${serverURL}${api}/_preferences/${key}`);
                let value = null;
                if (request.status === 200) {
                    const preference = await request.json();
                    value = preference.value;
                }
                preferencesRef.current[key] = value;
                resolve(value);
            })();
        });
        preferencesRef.current[key] = promise;
        return promise;
    }, [api, preferencesRef, serverURL]);
    const setPreference = useCallback(async (key, value) => {
        preferencesRef.current[key] = value;
        await requests.post(`${serverURL}${api}/_preferences/${key}`, requestOptions(value));
    }, [api, serverURL]);
    contextRef.current.getPreference = getPreference;
    contextRef.current.setPreference = setPreference;
    return (React.createElement(Context.Provider, { value: contextRef.current }, children));
};
export const usePreferences = () => useContext(Context);
