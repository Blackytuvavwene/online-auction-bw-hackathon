import React from 'react';
import Error from '../../Error';
import Label from '../../Label';
import FieldDescription from '../../FieldDescription';
import RadioInput from './RadioInput';
import { optionIsObject } from '../../../../../fields/config/types';
import './index.scss';
const baseClass = 'radio-group';
const RadioGroupInput = (props) => {
    const { name, path: pathFromProps, required, label, readOnly, layout = 'horizontal', style, className, width, description, onChange, value, showError, errorMessage, options, } = props;
    const path = pathFromProps || name;
    const classes = [
        'field-type',
        baseClass,
        className,
        `${baseClass}--layout-${layout}`,
        showError && 'error',
        readOnly && `${baseClass}--read-only`,
    ].filter(Boolean).join(' ');
    return (React.createElement("div", { className: classes, style: {
            ...style,
            width,
        } },
        React.createElement("div", { className: `${baseClass}__error-wrap` },
            React.createElement(Error, { showError: showError, message: errorMessage })),
        React.createElement(Label, { htmlFor: `field-${path}`, label: label, required: required }),
        React.createElement("ul", { id: `field-${path.replace(/\./gi, '__')}`, className: `${baseClass}--group` }, options.map((option) => {
            let optionValue = '';
            if (optionIsObject(option)) {
                optionValue = option.value;
            }
            else {
                optionValue = option;
            }
            const isSelected = String(optionValue) === String(value);
            return (React.createElement("li", { key: `${path} - ${optionValue}` },
                React.createElement(RadioInput, { path: path, isSelected: isSelected, option: optionIsObject(option) ? option : { label: option, value: option }, onChange: readOnly ? undefined : onChange })));
        })),
        React.createElement(FieldDescription, { value: value, description: description })));
};
export default RadioGroupInput;
