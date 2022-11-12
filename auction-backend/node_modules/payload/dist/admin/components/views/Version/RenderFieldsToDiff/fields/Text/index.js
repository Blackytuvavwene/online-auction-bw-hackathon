import React from 'react';
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import Label from '../../Label';
import { diffStyles } from '../styles';
import './index.scss';
const baseClass = 'text-diff';
const Text = ({ field, locale, version, comparison, isRichText = false, diffMethod }) => {
    let placeholder = '';
    if (version === comparison)
        placeholder = '[no value]';
    let versionToRender = version;
    let comparisonToRender = comparison;
    if (isRichText) {
        if (typeof version === 'object')
            versionToRender = JSON.stringify(version, null, 2);
        if (typeof comparison === 'object')
            comparisonToRender = JSON.stringify(comparison, null, 2);
    }
    return (React.createElement("div", { className: baseClass },
        React.createElement(Label, null,
            locale && (React.createElement("span", { className: `${baseClass}__locale-label` }, locale)),
            field.label),
        React.createElement(ReactDiffViewer, { styles: diffStyles, compareMethod: DiffMethod[diffMethod], oldValue: typeof comparisonToRender !== 'undefined' ? String(comparisonToRender) : placeholder, newValue: typeof versionToRender !== 'undefined' ? String(versionToRender) : placeholder, splitView: true, hideLineNumbers: true, showDiffOnly: false })));
    return null;
};
export default Text;
