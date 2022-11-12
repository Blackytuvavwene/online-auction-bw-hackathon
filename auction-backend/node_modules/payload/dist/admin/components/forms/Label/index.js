import React from 'react';
import './index.scss';
const Label = (props) => {
    const { label, required = false, htmlFor, } = props;
    if (label) {
        return (React.createElement("label", { htmlFor: htmlFor, className: "field-label" },
            label,
            required && React.createElement("span", { className: "required" }, "*")));
    }
    return null;
};
export default Label;
