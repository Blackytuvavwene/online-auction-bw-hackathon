import React from 'react';
import ReactDiffViewer from 'react-diff-viewer';
import { useConfig } from '../../../../../utilities/Config';
import { useLocale } from '../../../../../utilities/Locale';
import { fieldAffectsData, fieldIsPresentationalOnly } from '../../../../../../../fields/config/types';
import Label from '../../Label';
import { diffStyles } from '../styles';
import './index.scss';
const baseClass = 'relationship-diff';
const generateLabelFromValue = (collections, field, locale, value) => {
    var _a;
    let relation;
    let relatedDoc;
    let valueToReturn = '';
    if (Array.isArray(field.relationTo)) {
        if (typeof value === 'object') {
            relation = value.relationTo;
            relatedDoc = value.value;
        }
    }
    else {
        relation = field.relationTo;
        relatedDoc = value;
    }
    const relatedCollection = collections.find((c) => c.slug === relation);
    if (relatedCollection) {
        const useAsTitle = (_a = relatedCollection === null || relatedCollection === void 0 ? void 0 : relatedCollection.admin) === null || _a === void 0 ? void 0 : _a.useAsTitle;
        const useAsTitleField = relatedCollection.fields.find((f) => (fieldAffectsData(f) && !fieldIsPresentationalOnly(f)) && f.name === useAsTitle);
        let titleFieldIsLocalized = false;
        if (useAsTitleField && fieldAffectsData(useAsTitleField))
            titleFieldIsLocalized = useAsTitleField.localized;
        if (typeof (relatedDoc === null || relatedDoc === void 0 ? void 0 : relatedDoc[useAsTitle]) !== 'undefined') {
            valueToReturn = relatedDoc[useAsTitle];
        }
        else if (typeof (relatedDoc === null || relatedDoc === void 0 ? void 0 : relatedDoc.id) !== 'undefined') {
            valueToReturn = relatedDoc.id;
        }
        if (typeof valueToReturn === 'object' && titleFieldIsLocalized) {
            valueToReturn = valueToReturn[locale];
        }
    }
    return valueToReturn;
};
const Relationship = ({ field, version, comparison }) => {
    const { collections } = useConfig();
    const locale = useLocale();
    let placeholder = '';
    if (version === comparison)
        placeholder = '[no value]';
    let versionToRender = version;
    let comparisonToRender = comparison;
    if (field.hasMany) {
        if (Array.isArray(version))
            versionToRender = version.map((val) => generateLabelFromValue(collections, field, locale, val)).join(', ');
        if (Array.isArray(comparison))
            comparisonToRender = comparison.map((val) => generateLabelFromValue(collections, field, locale, val)).join(', ');
    }
    else {
        versionToRender = generateLabelFromValue(collections, field, locale, version);
        comparisonToRender = generateLabelFromValue(collections, field, locale, comparison);
    }
    return (React.createElement("div", { className: baseClass },
        React.createElement(Label, null,
            locale && (React.createElement("span", { className: `${baseClass}__locale-label` }, locale)),
            field.label),
        React.createElement(ReactDiffViewer, { styles: diffStyles, oldValue: typeof comparisonToRender !== 'undefined' ? String(comparisonToRender) : placeholder, newValue: typeof versionToRender !== 'undefined' ? String(versionToRender) : placeholder, splitView: true, hideLineNumbers: true, showDiffOnly: false })));
    return null;
};
export default Relationship;
