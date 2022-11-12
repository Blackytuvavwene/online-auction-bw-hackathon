import React, { useCallback } from 'react';
import useField from '../../useField';
import Label from '../../Label';
import Error from '../../Error';
import withCondition from '../../withCondition';
import { password } from '../../../../../fields/validations';
import './index.scss';
const Password = (props) => {
    const { path: pathFromProps, name, required, validate = password, style, className, width, autoComplete, label, } = props;
    const path = pathFromProps || name;
    const memoizedValidate = useCallback((value, options) => {
        const validationResult = validate(value, { ...options, required });
        return validationResult;
    }, [validate, required]);
    const { value, showError, formProcessing, setValue, errorMessage, } = useField({
        path,
        validate: memoizedValidate,
    });
    const classes = [
        'field-type',
        'password',
        className,
        showError && 'error',
    ].filter(Boolean).join(' ');
    return (React.createElement("div", { className: classes, style: {
            ...style,
            width,
        } },
        React.createElement(Error, { showError: showError, message: errorMessage }),
        React.createElement(Label, { htmlFor: `field-${path.replace(/\./gi, '__')}`, label: label, required: required }),
        React.createElement("input", { id: `field-${path.replace(/\./gi, '__')}`, value: value || '', onChange: setValue, disabled: formProcessing, type: "password", autoComplete: autoComplete, name: path })));
};
export default withCondition(Password);
