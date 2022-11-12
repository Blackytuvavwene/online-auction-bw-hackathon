import React from 'react';
const TextareaCell = ({ data }) => {
    const textToShow = (data === null || data === void 0 ? void 0 : data.length) > 100 ? `${data.substr(0, 100)}\u2026` : data;
    return (React.createElement("span", null, textToShow));
};
export default TextareaCell;
