import React from 'react';
import listTypes from '../listTypes';
const LI = (props) => {
    var _a, _b;
    const { attributes, element, children } = props;
    const disableListStyle = element.children.length >= 1 && listTypes.includes((_b = (_a = element.children) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.type);
    return (React.createElement("li", { style: { listStyle: disableListStyle ? 'none' : undefined }, ...attributes }, children));
};
export default {
    Element: LI,
};
