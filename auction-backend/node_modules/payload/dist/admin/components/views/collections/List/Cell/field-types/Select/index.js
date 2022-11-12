import React from 'react';
import { optionsAreObjects } from '../../../../../../../../fields/config/types';
const SelectCell = ({ data, field }) => {
    const findLabel = (items) => items.map((i) => {
        var _a, _b;
        const found = (_b = (_a = field.options
            .filter((f) => f.value === i)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.label;
        return found;
    }).join(', ');
    let content = '';
    if (optionsAreObjects(field.options)) {
        content = Array.isArray(data)
            ? findLabel(data) // hasMany
            : findLabel([data]);
    }
    else {
        content = Array.isArray(data)
            ? data.join(', ') // hasMany
            : data;
    }
    return (React.createElement("span", null, content));
};
export default SelectCell;
