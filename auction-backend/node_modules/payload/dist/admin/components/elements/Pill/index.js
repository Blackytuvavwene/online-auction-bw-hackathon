import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
const baseClass = 'pill';
const Pill = ({ children, className, to, icon, alignIcon = 'right', onClick, pillStyle = 'light', }) => {
    const classes = [
        baseClass,
        `${baseClass}--style-${pillStyle}`,
        className && className,
        to && `${baseClass}--has-link`,
        (to || onClick) && `${baseClass}--has-action`,
        icon && `${baseClass}--has-icon`,
        icon && `${baseClass}--align-icon-${alignIcon}`,
    ].filter(Boolean).join(' ');
    let RenderedType = 'div';
    if (onClick && !to)
        RenderedType = 'button';
    if (to)
        RenderedType = Link;
    return (React.createElement(RenderedType, { className: classes, onClick: onClick, type: RenderedType === 'button' ? 'button' : undefined, to: to || undefined },
        (icon && alignIcon === 'left') && (React.createElement(React.Fragment, null, icon)),
        children,
        (icon && alignIcon === 'right') && (React.createElement(React.Fragment, null, icon))));
};
export default Pill;
