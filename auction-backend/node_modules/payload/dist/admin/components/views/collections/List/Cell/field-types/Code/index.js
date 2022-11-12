import React from 'react';
import './index.scss';
const CodeCell = ({ data }) => {
    const textToShow = data.length > 100 ? `${data.substring(0, 100)}\u2026` : data;
    return (React.createElement("code", { className: "code-cell" },
        React.createElement("span", null, textToShow)));
};
export default CodeCell;
