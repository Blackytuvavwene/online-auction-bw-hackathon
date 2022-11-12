import React from 'react';
import Chevron from '../../../icons/Chevron';
import './index.scss';
const baseClass = 'clickable-arrow';
const ClickableArrow = (props) => {
    const { updatePage, isDisabled = false, direction = 'right', } = props;
    const classes = [
        baseClass,
        isDisabled && `${baseClass}--is-disabled`,
        direction && `${baseClass}--${direction}`,
    ].filter(Boolean).join(' ');
    return (React.createElement("button", { className: classes, onClick: !isDisabled ? updatePage : undefined, type: "button" },
        React.createElement(Chevron, null)));
};
export default ClickableArrow;
