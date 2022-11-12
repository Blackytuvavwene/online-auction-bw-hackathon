import React, { isValidElement } from 'react';
import { Link } from 'react-router-dom';
import plus from '../../icons/Plus';
import x from '../../icons/X';
import chevron from '../../icons/Chevron';
import edit from '../../icons/Edit';
import swap from '../../icons/Swap';
import Tooltip from '../Tooltip';
import './index.scss';
const icons = {
    plus,
    x,
    chevron,
    edit,
    swap,
};
const baseClass = 'btn';
const ButtonContents = ({ children, icon, tooltip }) => {
    const BuiltInIcon = icons[icon];
    return (React.createElement("span", { className: `${baseClass}__content` },
        tooltip && (React.createElement(Tooltip, { className: `${baseClass}__tooltip` }, tooltip)),
        children && (React.createElement("span", { className: `${baseClass}__label` }, children)),
        icon && (React.createElement("span", { className: `${baseClass}__icon` },
            isValidElement(icon) && icon,
            BuiltInIcon && React.createElement(BuiltInIcon, null)))));
};
const Button = (props) => {
    const { className, id, type = 'button', el, to, url, children, onClick, disabled, icon, iconStyle = 'without-border', buttonStyle = 'primary', round, size = 'medium', iconPosition = 'right', newTab, tooltip, } = props;
    const classes = [
        baseClass,
        className && className,
        buttonStyle && `${baseClass}--style-${buttonStyle}`,
        icon && `${baseClass}--icon`,
        iconStyle && `${baseClass}--icon-style-${iconStyle}`,
        (icon && !children) && `${baseClass}--icon-only`,
        disabled && `${baseClass}--disabled`,
        round && `${baseClass}--round`,
        size && `${baseClass}--size-${size}`,
        iconPosition && `${baseClass}--icon-position-${iconPosition}`,
        tooltip && `${baseClass}--has-tooltip`,
    ].filter(Boolean).join(' ');
    function handleClick(event) {
        if (type !== 'submit' && onClick)
            event.preventDefault();
        if (onClick)
            onClick(event);
    }
    const buttonProps = {
        id,
        type,
        className: classes,
        disabled,
        onClick: !disabled ? handleClick : undefined,
        rel: newTab ? 'noopener noreferrer' : undefined,
        target: newTab ? '_blank' : undefined,
    };
    switch (el) {
        case 'link':
            return (React.createElement(Link, { ...buttonProps, to: to || url },
                React.createElement(ButtonContents, { icon: icon, tooltip: tooltip }, children)));
        case 'anchor':
            return (React.createElement("a", { ...buttonProps, href: url },
                React.createElement(ButtonContents, { icon: icon, tooltip: tooltip }, children)));
        default:
            return (React.createElement("button", { type: "submit", ...buttonProps },
                React.createElement(ButtonContents, { icon: icon, tooltip: tooltip }, children)));
    }
};
export default Button;
