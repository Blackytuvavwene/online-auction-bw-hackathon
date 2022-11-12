import React, { forwardRef } from 'react';
import './index.scss';
const baseClass = 'gutter';
export const Gutter = forwardRef((props, ref) => {
    const { left = true, right = true, negativeLeft = false, negativeRight = false, className, children, } = props;
    const shouldPadLeft = left && !negativeLeft;
    const shouldPadRight = right && !negativeRight;
    return (React.createElement("div", { ref: ref, className: [
            shouldPadLeft && `${baseClass}--left`,
            shouldPadRight && `${baseClass}--right`,
            negativeLeft && `${baseClass}--negative-left`,
            negativeRight && `${baseClass}--negative-right`,
            className,
        ].filter(Boolean).join(' ') }, children));
});
Gutter.displayName = 'Gutter';
