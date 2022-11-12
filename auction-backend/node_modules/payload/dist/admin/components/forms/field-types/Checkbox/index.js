import React, { useCallback } from 'react';
import useField from '../../useField';
import withCondition from '../../withCondition';
import Error from '../../Error';
import { checkbox } from '../../../../../fields/validations';
import Check from '../../../icons/Check';
import FieldDescription from '../../FieldDescription';
import './index.scss';
const baseClass = 'checkbox';
const Checkbox = (props) => {
    const { name, path: pathFromProps, validate = checkbox, label, onChange, disableFormData, required, admin: { readOnly, style, className, width, description, condition, } = {}, } = props;
    const path = pathFromProps || name;
    const memoizedValidate = useCallback((value, options) => {
        return validate(value, { ...options, required });
    }, [validate, required]);
    const { value, showError, errorMessage, setValue, } = useField({
        path,
        validate: memoizedValidate,
        disableFormData,
        condition,
    });
    return (React.createElement("div", { className: [
            'field-type',
            baseClass,
            showError && 'error',
            className,
            value && `${baseClass}--checked`,
            readOnly && `${baseClass}--read-only`,
        ].filter(Boolean).join(' '), style: {
            ...style,
            width,
        } },
        React.createElement("div", { className: `${baseClass}__error-wrap` },
            React.createElement(Error, { showError: showError, message: errorMessage })),
        React.createElement("input", { id: `field-${path.replace(/\./gi, '__')}`, type: "checkbox", name: path, checked: Boolean(value), readOnly: true }),
        React.createElement("button", { type: "button", onClick: readOnly ? undefined : () => {
                setValue(!value);
                if (typeof onChange === 'function')
                    onChange(!value);
            } },
            React.createElement("span", { className: `${baseClass}__input` },
                React.createElement(Check, null)),
            React.createElement("span", { className: `${baseClass}__label` }, label)),
        React.createElement(FieldDescription, { value: value, description: description })));
};
export default withCondition(Checkbox);
