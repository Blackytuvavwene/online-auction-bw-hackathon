import React, { createContext, useContext, useState, useEffect, } from 'react';
import { useConfig } from '../Config';
import { useAuth } from '../Auth';
import { usePreferences } from '../Preferences';
import { useSearchParams } from '../SearchParams';
const Context = createContext('');
export const LocaleProvider = ({ children }) => {
    const { localization } = useConfig();
    const { user } = useAuth();
    const defaultLocale = (localization && localization.defaultLocale) ? localization.defaultLocale : 'en';
    const searchParams = useSearchParams();
    const [locale, setLocale] = useState((searchParams === null || searchParams === void 0 ? void 0 : searchParams.locale) || defaultLocale);
    const { getPreference, setPreference } = usePreferences();
    const localeFromParams = searchParams.locale;
    useEffect(() => {
        if (!localization) {
            return;
        }
        // set locale from search param
        if (localeFromParams && localization.locales.indexOf(localeFromParams) > -1) {
            setLocale(localeFromParams);
            if (user)
                setPreference('locale', localeFromParams);
            return;
        }
        // set locale from preferences or default
        (async () => {
            let preferenceLocale;
            let isPreferenceInConfig;
            if (user) {
                preferenceLocale = await getPreference('locale');
                isPreferenceInConfig = preferenceLocale && (localization.locales.indexOf(preferenceLocale) > -1);
                if (isPreferenceInConfig) {
                    setLocale(preferenceLocale);
                    return;
                }
                setPreference('locale', defaultLocale);
            }
            setLocale(defaultLocale);
        })();
    }, [defaultLocale, getPreference, localeFromParams, localization, setPreference, user]);
    return (React.createElement(Context.Provider, { value: locale }, children));
};
export const useLocale = () => useContext(Context);
export default Context;
