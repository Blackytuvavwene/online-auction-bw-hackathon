import React from 'react';
import RenderFieldsToDiff from '../..';
import Label from '../../Label';
import { fieldAffectsData } from '../../../../../../../fields/config/types';
import getUniqueListBy from '../../../../../../../utilities/getUniqueListBy';
import './index.scss';
const baseClass = 'iterable-diff';
const Iterable = ({ version, comparison, permissions, field, locale, locales, fieldComponents, }) => {
    var _a, _b;
    const versionRowCount = Array.isArray(version) ? version.length : 0;
    const comparisonRowCount = Array.isArray(comparison) ? comparison.length : 0;
    const maxRows = Math.max(versionRowCount, comparisonRowCount);
    return (React.createElement("div", { className: baseClass },
        field.label && (React.createElement(Label, null,
            locale && (React.createElement("span", { className: `${baseClass}__locale-label` }, locale)),
            field.label)),
        maxRows > 0 && (React.createElement(React.Fragment, null, Array.from(Array(maxRows).keys()).map((row, i) => {
            const versionRow = (version === null || version === void 0 ? void 0 : version[i]) || {};
            const comparisonRow = (comparison === null || comparison === void 0 ? void 0 : comparison[i]) || {};
            let subFields = [];
            if (field.type === 'array')
                subFields = field.fields;
            if (field.type === 'blocks') {
                subFields = [
                    {
                        name: 'blockType',
                        label: 'Block Type',
                        type: 'text',
                    },
                ];
                if ((versionRow === null || versionRow === void 0 ? void 0 : versionRow.blockType) === (comparisonRow === null || comparisonRow === void 0 ? void 0 : comparisonRow.blockType)) {
                    const matchedBlock = field.blocks.find((block) => block.slug === (versionRow === null || versionRow === void 0 ? void 0 : versionRow.blockType)) || { fields: [] };
                    subFields = [
                        ...subFields,
                        ...matchedBlock.fields,
                    ];
                }
                else {
                    const matchedVersionBlock = field.blocks.find((block) => block.slug === (versionRow === null || versionRow === void 0 ? void 0 : versionRow.blockType)) || { fields: [] };
                    const matchedComparisonBlock = field.blocks.find((block) => block.slug === (comparisonRow === null || comparisonRow === void 0 ? void 0 : comparisonRow.blockType)) || { fields: [] };
                    subFields = getUniqueListBy([
                        ...subFields,
                        ...matchedVersionBlock.fields,
                        ...matchedComparisonBlock.fields,
                    ], 'name');
                }
            }
            return (React.createElement("div", { className: `${baseClass}__wrap`, key: i },
                React.createElement(RenderFieldsToDiff, { locales: locales, version: versionRow, comparison: comparisonRow, fieldPermissions: permissions, fields: subFields.filter((subField) => !(fieldAffectsData(subField) && subField.name === 'id')), fieldComponents: fieldComponents })));
        }))),
        maxRows === 0 && (React.createElement("div", { className: `${baseClass}__no-rows` },
            "No",
            ' ', (_b = (_a = field.labels) === null || _a === void 0 ? void 0 : _a.plural) !== null && _b !== void 0 ? _b : 'rows',
            ' ',
            "found"))));
};
export default Iterable;
