import React from 'react';
import { fieldAffectsData, fieldHasSubFields } from '../../../../../fields/config/types';
import Nested from './fields/Nested';
import { diffMethods } from './fields/diffMethods';
import './index.scss';
const baseClass = 'render-field-diffs';
const RenderFieldsToDiff = ({ fields, fieldComponents, fieldPermissions, version, comparison, locales, }) => (React.createElement("div", { className: baseClass }, fields.map((field, i) => {
    var _a, _b, _c;
    const Component = fieldComponents[field.type];
    const isRichText = field.type === 'richText';
    const diffMethod = diffMethods[field.type] || 'CHARS';
    if (Component) {
        if (fieldAffectsData(field)) {
            const versionValue = version === null || version === void 0 ? void 0 : version[field.name];
            const comparisonValue = comparison === null || comparison === void 0 ? void 0 : comparison[field.name];
            const hasPermission = (_b = (_a = fieldPermissions === null || fieldPermissions === void 0 ? void 0 : fieldPermissions[field.name]) === null || _a === void 0 ? void 0 : _a.read) === null || _b === void 0 ? void 0 : _b.permission;
            const subFieldPermissions = (_c = fieldPermissions === null || fieldPermissions === void 0 ? void 0 : fieldPermissions[field.name]) === null || _c === void 0 ? void 0 : _c.fields;
            if (hasPermission === false)
                return null;
            if (field.localized) {
                return (React.createElement("div", { className: `${baseClass}__field`, key: i }, locales.map((locale) => {
                    const versionLocaleValue = versionValue === null || versionValue === void 0 ? void 0 : versionValue[locale];
                    const comparisonLocaleValue = comparisonValue === null || comparisonValue === void 0 ? void 0 : comparisonValue[locale];
                    return (React.createElement("div", { className: `${baseClass}__locale`, key: locale },
                        React.createElement("div", { className: `${baseClass}__locale-value` },
                            React.createElement(Component, { diffMethod: diffMethod, locale: locale, locales: locales, field: field, fieldComponents: fieldComponents, version: versionLocaleValue, comparison: comparisonLocaleValue, permissions: subFieldPermissions, isRichText: isRichText }))));
                })));
            }
            return (React.createElement("div", { className: `${baseClass}__field`, key: i },
                React.createElement(Component, { diffMethod: diffMethod, locales: locales, field: field, fieldComponents: fieldComponents, version: versionValue, comparison: comparisonValue, permissions: subFieldPermissions, isRichText: isRichText })));
        }
        if (field.type === 'tabs') {
            const Tabs = fieldComponents.tabs;
            return (React.createElement(Tabs, { key: i, version: version, comparison: comparison, field: field, locales: locales, fieldComponents: fieldComponents }));
        }
        // At this point, we are dealing with a `row` or similar
        if (fieldHasSubFields(field)) {
            return (React.createElement(Nested, { key: i, locales: locales, disableGutter: true, field: field, fieldComponents: fieldComponents, version: version, comparison: comparison, permissions: fieldPermissions }));
        }
    }
    return null;
})));
export default RenderFieldsToDiff;
