import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useConfig } from '../../utilities/Config';
import { useAuth } from '../../utilities/Auth';
import { useStepNav } from '../../elements/StepNav';
import usePayloadAPI from '../../../hooks/usePayloadAPI';
import { useLocale } from '../../utilities/Locale';
import RenderCustomComponent from '../../utilities/RenderCustomComponent';
import DefaultGlobal from './Default';
import buildStateFromSchema from '../../forms/Form/buildStateFromSchema';
import { useDocumentInfo } from '../../utilities/DocumentInfo';
import { usePreferences } from '../../utilities/Preferences';
const GlobalView = (props) => {
    var _a, _b;
    const { state: locationState } = useLocation();
    const locale = useLocale();
    const { setStepNav } = useStepNav();
    const { permissions, user } = useAuth();
    const [initialState, setInitialState] = useState();
    const { getVersions, preferencesKey } = useDocumentInfo();
    const { getPreference } = usePreferences();
    const { serverURL, routes: { api, }, } = useConfig();
    const { global } = props;
    const { slug, label, fields, admin: { components: { views: { Edit: CustomEdit, } = {}, } = {}, } = {}, } = global;
    const onSave = useCallback(async (json) => {
        getVersions();
        const state = await buildStateFromSchema({ fieldSchema: fields, data: json.result, operation: 'update', user, locale });
        setInitialState(state);
    }, [getVersions, fields, user, locale]);
    const [{ data }] = usePayloadAPI(`${serverURL}${api}/globals/${slug}`, { initialParams: { 'fallback-locale': 'null', depth: 0, draft: 'true' } });
    const dataToRender = (locationState === null || locationState === void 0 ? void 0 : locationState.data) || data;
    useEffect(() => {
        const nav = [{
                label,
            }];
        setStepNav(nav);
    }, [setStepNav, label]);
    useEffect(() => {
        const awaitInitialState = async () => {
            const state = await buildStateFromSchema({ fieldSchema: fields, data: dataToRender, user, operation: 'update', locale });
            await getPreference(preferencesKey);
            setInitialState(state);
        };
        awaitInitialState();
    }, [dataToRender, fields, user, locale, getPreference, preferencesKey]);
    const globalPermissions = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.globals) === null || _a === void 0 ? void 0 : _a[slug];
    return (React.createElement(RenderCustomComponent, { DefaultComponent: DefaultGlobal, CustomComponent: CustomEdit, componentProps: {
            isLoading: !initialState,
            data: dataToRender,
            permissions: globalPermissions,
            initialState,
            global,
            onSave,
            apiURL: `${serverURL}${api}/globals/${slug}${((_b = global.versions) === null || _b === void 0 ? void 0 : _b.drafts) ? '?draft=true' : ''}`,
            action: `${serverURL}${api}/globals/${slug}?locale=${locale}&depth=0&fallback-locale=null`,
        } }));
};
export default GlobalView;
