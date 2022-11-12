import React from 'react';
import Label from '../../Label';
import Error from '../../Error';
import FieldDescription from '../../FieldDescription';
import ReactSelect from '../../../elements/ReactSelect';
// import { FieldType } from '../../useField/types';
import './index.scss';
const SelectInput = (props) => {
    const { showError, errorMessage, readOnly, path, label, required, value, onChange, description, style, className, width, options, hasMany, isSortable, isClearable, } = props;
    const classes = [
        'field-type',
        'select',
        className,
        showError && 'error',
        readOnly && 'read-only',
    ].filter(Boolean).join(' ');
    let valueToRender;
    if (hasMany && Array.isArray(value)) {
        valueToRender = value.map((val) => options.find((option) => option.value === val));
    }
    else {
        valueToRender = options.find((option) => option.value === value);
    }
    return (React.createElement("div", { id: `field-${path.replace(/\./gi, '__')}`, className: classes, style: {
            ...style,
            width,
        } },
        React.createElement(Error, { showError: showError, message: errorMessage }),
        React.createElement(Label, { htmlFor: `field-${path.replace(/\./gi, '__')}`, label: label, required: required }),
        React.createElement(ReactSelect, { onChange: onChange, value: valueToRender, showError: showError, isDisabled: readOnly, options: options, isMulti: hasMany, isSortable: isSortable, isClearable: isClearable }),
        React.createElement(FieldDescription, { value: value, description: description })));
};
export default SelectInput;
