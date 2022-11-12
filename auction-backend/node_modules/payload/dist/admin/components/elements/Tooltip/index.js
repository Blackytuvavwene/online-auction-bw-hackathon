import React from 'react';
import './index.scss';
const Tooltip = (props) => {
    const { className, children } = props;
    const classes = [
        'tooltip',
        className,
    ].filter(Boolean).join(' ');
    return (React.createElement("aside", { className: classes },
        children,
        React.createElement("span", null)));
};
export default Tooltip;
