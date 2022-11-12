import React from 'react';
import './index.scss';
const baseClass = 'template-minimal';
const Minimal = (props) => {
    const { className, style = {}, children, width = 'normal', } = props;
    const classes = [
        className,
        baseClass,
        `${baseClass}--width-${width}`,
    ].filter(Boolean).join(' ');
    return (React.createElement("section", { className: classes, style: style },
        React.createElement("div", { className: `${baseClass}__wrap` }, children)));
};
export default Minimal;
