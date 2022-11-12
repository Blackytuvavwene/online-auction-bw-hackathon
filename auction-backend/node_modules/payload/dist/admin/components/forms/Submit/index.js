import React from 'react';
import { useForm, useFormProcessing } from '../Form/context';
import Button from '../../elements/Button';
import './index.scss';
const baseClass = 'form-submit';
const FormSubmit = (props) => {
    const { children, buttonId: id, disabled: disabledFromProps, type = 'submit' } = props;
    const processing = useFormProcessing();
    const { disabled } = useForm();
    return (React.createElement("div", { className: baseClass },
        React.createElement(Button, { ...props, id: id, type: type, disabled: disabledFromProps || processing || disabled ? true : undefined }, children)));
};
export default FormSubmit;
