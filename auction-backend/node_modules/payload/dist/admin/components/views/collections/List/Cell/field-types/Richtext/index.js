import React from 'react';
const RichTextCell = ({ data }) => {
    const flattenedText = data === null || data === void 0 ? void 0 : data.map((i) => { var _a; return (_a = i === null || i === void 0 ? void 0 : i.children) === null || _a === void 0 ? void 0 : _a.map((c) => c.text); }).join(' ');
    const textToShow = (flattenedText === null || flattenedText === void 0 ? void 0 : flattenedText.length) > 100 ? `${flattenedText.slice(0, 100)}\u2026` : flattenedText;
    return (React.createElement("span", null, textToShow));
};
export default RichTextCell;
