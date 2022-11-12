import React from 'react';
import './index.scss';
// Handles boolean values
const Checkbox = ({ data }) => (React.createElement("code", { className: "bool-cell" },
    React.createElement("span", null, JSON.stringify(data))));
export default Checkbox;
