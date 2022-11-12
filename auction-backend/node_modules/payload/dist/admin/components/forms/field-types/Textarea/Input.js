import React from 'react';
import Label from '../../Label';
import Error from '../../Error';
import FieldDescription from '../../FieldDescription';
import './index.scss';
const TextareaInput = (props) => {
    const { path, required, readOnly, style, className, width, placeholder, description, label, showError, value, errorMessage, onChange, rows, } = props;
    const classes = [
        'field-type',
        'textarea',
        className,
        showError && 'error',
        readOnly && 'read-only',
    ].filter(Boolean).join(' ');
    return (React.createElement("div", { className: classes, style: {
            ...style,
            width,
        } },
        React.createElement(Error, { showError: showError, message: errorMessage }),
        React.createElement(Label, { htmlFor: `field-${path.replace(/\./gi, '__')}`, label: label, required: required }),
        React.createElement("textarea", { id: `field-${path.replace(/\./gi, '__')}`, value: value || '', onChange: onChange, disabled: readOnly, placeholder: placeholder, name: path, rows: rows }),
        React.createElement(FieldDescription, { value: value, description: description })));
};
export default TextareaInput;
