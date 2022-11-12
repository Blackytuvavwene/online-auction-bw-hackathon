import React, { useCallback } from 'react';
import DatePicker from '../../../elements/DatePicker';
import withCondition from '../../withCondition';
import useField from '../../useField';
import Label from '../../Label';
import Error from '../../Error';
import FieldDescription from '../../FieldDescription';
import { date as dateValidation } from '../../../../../fields/validations';
import './index.scss';
const baseClass = 'date-time-field';
const DateTime = (props) => {
    const { path: pathFromProps, name, required, validate = dateValidation, label, admin: { placeholder, readOnly, style, className, width, date, description, condition, } = {}, } = props;
    const path = pathFromProps || name;
    const memoizedValidate = useCallback((value, options) => {
        return validate(value, { ...options, required });
    }, [validate, required]);
    const { value, showError, errorMessage, setValue, } = useField({
        path,
        validate: memoizedValidate,
        condition,
    });
    const classes = [
        'field-type',
        baseClass,
        className,
        showError && `${baseClass}--has-error`,
        readOnly && 'read-only',
    ].filter(Boolean).join(' ');
    return (React.createElement("div", { className: classes, style: {
            ...style,
            width,
        } },
        React.createElement("div", { className: `${baseClass}__error-wrap` },
            React.createElement(Error, { showError: showError, message: errorMessage })),
        React.createElement(Label, { htmlFor: path, label: label, required: required }),
        React.createElement("div", { id: `field-${path.replace(/\./gi, '__')}`, className: `${baseClass}__input-wrapper` },
            React.createElement(DatePicker, { ...date, placeholder: placeholder, readOnly: readOnly, onChange: readOnly ? undefined : setValue, value: value })),
        React.createElement(FieldDescription, { value: value, description: description })));
};
export default withCondition(DateTime);
