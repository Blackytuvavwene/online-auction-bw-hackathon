import React, { useCallback } from 'react';
import useField from '../../useField';
import withCondition from '../../withCondition';
import { text } from '../../../../../fields/validations';
import TextInput from './Input';
const Text = (props) => {
    const { path: pathFromProps, name, required, validate = text, label, minLength, maxLength, admin: { placeholder, readOnly, style, className, width, description, condition, } = {}, inputRef, } = props;
    const path = pathFromProps || name;
    const memoizedValidate = useCallback((value, options) => {
        return validate(value, { ...options, minLength, maxLength, required });
    }, [validate, minLength, maxLength, required]);
    const field = useField({
        path,
        validate: memoizedValidate,
        condition,
    });
    const { value, showError, setValue, errorMessage, } = field;
    return (React.createElement(TextInput, { path: path, name: name, onChange: (e) => {
            setValue(e.target.value);
        }, showError: showError, errorMessage: errorMessage, required: required, label: label, value: value, placeholder: placeholder, readOnly: readOnly, style: style, className: className, width: width, description: description, inputRef: inputRef }));
};
export default withCondition(Text);
