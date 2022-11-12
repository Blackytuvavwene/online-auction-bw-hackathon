import React, { useCallback } from 'react';
import { useSlate } from 'slate-react';
import isElementActive from './isActive';
import toggleElement from './toggle';
import '../buttons.scss';
export const baseClass = 'rich-text__button';
const ElementButton = ({ format, children, onClick, className }) => {
    const editor = useSlate();
    const defaultOnClick = useCallback((event) => {
        event.preventDefault();
        toggleElement(editor, format);
    }, [editor, format]);
    return (React.createElement("button", { type: "button", className: [
            baseClass,
            className,
            isElementActive(editor, format) && `${baseClass}__button--active`,
        ].filter(Boolean).join(' '), onClick: onClick || defaultOnClick }, children));
};
export default ElementButton;
