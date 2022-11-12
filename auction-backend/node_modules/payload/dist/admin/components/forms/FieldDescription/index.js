import React from 'react';
import { isComponent } from './types';
import './index.scss';
const baseClass = 'field-description';
const FieldDescription = (props) => {
    const { className, description, value, } = props;
    if (isComponent(description)) {
        const Description = description;
        return React.createElement(Description, { value: value });
    }
    if (description) {
        return (React.createElement("div", { className: [
                baseClass,
                className,
            ].filter(Boolean).join(' ') }, typeof description === 'function' ? description({ value }) : description));
    }
    return null;
};
export default FieldDescription;
