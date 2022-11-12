import React from 'react';
import { isComponent } from './types';
import './index.scss';
const ViewDescription = (props) => {
    const { description, } = props;
    if (isComponent(description)) {
        const Description = description;
        return React.createElement(Description, null);
    }
    if (description) {
        return (React.createElement("div", { className: "view-description" }, typeof description === 'function' ? description() : description));
    }
    return null;
};
export default ViewDescription;
