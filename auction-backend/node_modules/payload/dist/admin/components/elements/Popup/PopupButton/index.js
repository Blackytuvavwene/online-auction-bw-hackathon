import React from 'react';
import './index.scss';
const baseClass = 'popup-button';
const PopupButton = (props) => {
    const { className, buttonType, button, setActive, active, } = props;
    const classes = [
        baseClass,
        className,
        `${baseClass}--${buttonType}`,
    ].filter(Boolean).join(' ');
    const handleClick = () => {
        setActive(!active);
    };
    if (buttonType === 'none') {
        return null;
    }
    if (buttonType === 'custom') {
        return (React.createElement("div", { role: "button", tabIndex: 0, onKeyDown: (e) => { if (e.key === 'Enter')
                handleClick(); }, onClick: handleClick, className: classes }, button));
    }
    return (React.createElement("button", { type: "button", onClick: () => setActive(!active), className: classes }, button));
};
export default PopupButton;
