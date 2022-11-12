import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
const baseClass = 'banner';
const Banner = ({ children, className, to, icon, alignIcon = 'right', onClick, type = 'default', }) => {
    const classes = [
        baseClass,
        `${baseClass}--type-${type}`,
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
    return (React.createElement(RenderedType, { className: classes, onClick: onClick, to: to || undefined },
        (icon && alignIcon === 'left') && (React.createElement(React.Fragment, null, icon)),
        React.createElement("span", { className: `${baseClass}__content` }, children),
        (icon && alignIcon === 'right') && (React.createElement(React.Fragment, null, icon))));
};
export default Banner;
