import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import format from 'date-fns/format';
import { useConfig } from '../../utilities/Config';
import { useAuth } from '../../utilities/Auth';
import usePayloadAPI from '../../../hooks/usePayloadAPI';
import Eyebrow from '../../elements/Eyebrow';
import Loading from '../../elements/Loading';
import { useStepNav } from '../../elements/StepNav';
import Meta from '../../utilities/Meta';
import CompareVersion from './Compare';
import { mostRecentVersionOption } from './shared';
import Restore from './Restore';
import SelectLocales from './SelectLocales';
import RenderFieldsToDiff from './RenderFieldsToDiff';
import fieldComponents from './RenderFieldsToDiff/fields';
import { fieldAffectsData } from '../../../../fields/config/types';
import { useLocale } from '../../utilities/Locale';
import { Gutter } from '../../elements/Gutter';
import './index.scss';
const baseClass = 'view-version';
const VersionView = ({ collection, global }) => {
    var _a;
    const { serverURL, routes: { admin, api }, admin: { dateFormat }, localization } = useConfig();
    const { setStepNav } = useStepNav();
    const { params: { id, versionID } } = useRouteMatch();
    const [compareValue, setCompareValue] = useState(mostRecentVersionOption);
    const [localeOptions] = useState(() => (localization ? localization.locales.map((locale) => ({ label: locale, value: locale })) : []));
    const [locales, setLocales] = useState(localeOptions);
    const { permissions } = useAuth();
    const locale = useLocale();
    let originalDocFetchURL;
    let versionFetchURL;
    let entityLabel;
    let fields;
    let fieldPermissions;
    let compareBaseURL;
    let slug;
    let parentID;
    if (collection) {
        ({ slug } = collection);
        originalDocFetchURL = `${serverURL}${api}/${slug}/${id}`;
        versionFetchURL = `${serverURL}${api}/${slug}/versions/${versionID}`;
        compareBaseURL = `${serverURL}${api}/${slug}/versions`;
        entityLabel = collection.labels.singular;
        parentID = id;
        fields = collection.fields;
        fieldPermissions = permissions.collections[collection.slug].fields;
    }
    if (global) {
        ({ slug } = global);
        originalDocFetchURL = `${serverURL}${api}/globals/${slug}`;
        versionFetchURL = `${serverURL}${api}/globals/${slug}/versions/${versionID}`;
        compareBaseURL = `${serverURL}${api}/globals/${slug}/versions`;
        entityLabel = global.label;
        fields = global.fields;
        fieldPermissions = permissions.globals[global.slug].fields;
    }
    const compareFetchURL = (compareValue === null || compareValue === void 0 ? void 0 : compareValue.value) === 'mostRecent' || (compareValue === null || compareValue === void 0 ? void 0 : compareValue.value) === 'published' ? originalDocFetchURL : `${compareBaseURL}/${compareValue.value}`;
    const [{ data: doc, isLoading }] = usePayloadAPI(versionFetchURL, { initialParams: { locale: '*', depth: 1 } });
    const [{ data: publishedDoc }] = usePayloadAPI(originalDocFetchURL, { initialParams: { locale: '*', depth: 1 } });
    const [{ data: mostRecentDoc }] = usePayloadAPI(originalDocFetchURL, { initialParams: { locale: '*', depth: 1, draft: true } });
    const [{ data: compareDoc }] = usePayloadAPI(compareFetchURL, { initialParams: { locale: '*', depth: 1, draft: 'true' } });
    useEffect(() => {
        var _a;
        let nav = [];
        if (collection) {
            let docLabel = '';
            if (mostRecentDoc) {
                const { useAsTitle } = collection.admin;
                if (useAsTitle !== 'id') {
                    const titleField = collection.fields.find((field) => fieldAffectsData(field) && field.name === useAsTitle);
                    if (titleField && mostRecentDoc[useAsTitle]) {
                        if (titleField.localized) {
                            docLabel = (_a = mostRecentDoc[useAsTitle]) === null || _a === void 0 ? void 0 : _a[locale];
                        }
                        else {
                            docLabel = mostRecentDoc[useAsTitle];
                        }
                    }
                    else {
                        docLabel = '[Untitled]';
                    }
                }
                else {
                    docLabel = mostRecentDoc.id;
                }
            }
            nav = [
                {
                    url: `${admin}/collections/${collection.slug}`,
                    label: collection.labels.plural,
                },
                {
                    label: docLabel,
                    url: `${admin}/collections/${collection.slug}/${id}`,
                },
                {
                    label: 'Versions',
                    url: `${admin}/collections/${collection.slug}/${id}/versions`,
                },
                {
                    label: (doc === null || doc === void 0 ? void 0 : doc.createdAt) ? format(new Date(doc.createdAt), dateFormat) : '',
                },
            ];
        }
        if (global) {
            nav = [
                {
                    url: `${admin}/globals/${global.slug}`,
                    label: global.label,
                },
                {
                    label: 'Versions',
                    url: `${admin}/globals/${global.slug}/versions`,
                },
                {
                    label: (doc === null || doc === void 0 ? void 0 : doc.createdAt) ? format(new Date(doc.createdAt), dateFormat) : '',
                },
            ];
        }
        setStepNav(nav);
    }, [setStepNav, collection, global, dateFormat, doc, mostRecentDoc, admin, id, locale]);
    let metaTitle;
    let metaDesc;
    const formattedCreatedAt = (doc === null || doc === void 0 ? void 0 : doc.createdAt) ? format(new Date(doc.createdAt), dateFormat) : '';
    if (collection) {
        const useAsTitle = ((_a = collection === null || collection === void 0 ? void 0 : collection.admin) === null || _a === void 0 ? void 0 : _a.useAsTitle) || 'id';
        metaTitle = `Version - ${formattedCreatedAt} - ${doc[useAsTitle]} - ${entityLabel}`;
        metaDesc = `Viewing version for the ${entityLabel} ${doc[useAsTitle]}`;
    }
    if (global) {
        metaTitle = `Version - ${formattedCreatedAt} - ${entityLabel}`;
        metaDesc = `Viewing version for the global ${entityLabel}`;
    }
    let comparison = compareDoc === null || compareDoc === void 0 ? void 0 : compareDoc.version;
    if ((compareValue === null || compareValue === void 0 ? void 0 : compareValue.value) === 'mostRecent') {
        comparison = mostRecentDoc;
    }
    if ((compareValue === null || compareValue === void 0 ? void 0 : compareValue.value) === 'published') {
        comparison = publishedDoc;
    }
    return (React.createElement("div", { className: baseClass },
        React.createElement(Meta, { title: metaTitle, description: metaDesc }),
        React.createElement(Eyebrow, null),
        React.createElement(Gutter, { className: `${baseClass}__wrap` },
            React.createElement("div", { className: `${baseClass}__intro` },
                (doc === null || doc === void 0 ? void 0 : doc.autosave) ? 'Autosaved version ' : 'Version',
                ' ',
                "created on:"),
            React.createElement("header", { className: `${baseClass}__header` },
                React.createElement("h2", null, formattedCreatedAt),
                React.createElement(Restore, { className: `${baseClass}__restore`, collection: collection, global: global, originalDocID: id, versionID: versionID, versionDate: formattedCreatedAt })),
            React.createElement("div", { className: `${baseClass}__controls` },
                React.createElement(CompareVersion, { publishedDoc: publishedDoc, versionID: versionID, baseURL: compareBaseURL, parentID: parentID, value: compareValue, onChange: setCompareValue }),
                localization && (React.createElement(SelectLocales, { onChange: setLocales, options: localeOptions, value: locales }))),
            isLoading && (React.createElement(Loading, null)),
            (doc === null || doc === void 0 ? void 0 : doc.version) && (React.createElement(RenderFieldsToDiff, { locales: locales ? locales.map(({ value }) => value) : [], fields: fields, fieldComponents: fieldComponents, fieldPermissions: fieldPermissions, version: doc === null || doc === void 0 ? void 0 : doc.version, comparison: comparison })))));
};
export default VersionView;
