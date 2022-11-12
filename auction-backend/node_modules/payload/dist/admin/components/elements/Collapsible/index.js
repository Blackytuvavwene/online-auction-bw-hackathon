import React, { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { CollapsibleProvider, useCollapsible } from './provider';
import Chevron from '../../icons/Chevron';
import DragHandle from '../../icons/Drag';
import './index.scss';
const baseClass = 'collapsible';
export const Collapsible = ({ children, collapsed: collapsedFromProps, onToggle, className, header, initCollapsed, dragHandleProps, actions, }) => {
    const [collapsedLocal, setCollapsedLocal] = useState(Boolean(initCollapsed));
    const [hovered, setHovered] = useState(false);
    const isNested = useCollapsible();
    const collapsed = typeof collapsedFromProps === 'boolean' ? collapsedFromProps : collapsedLocal;
    return (React.createElement("div", { className: [
            baseClass,
            className,
            dragHandleProps && `${baseClass}--has-drag-handle`,
            collapsed && `${baseClass}--collapsed`,
            isNested && `${baseClass}--nested`,
            hovered && `${baseClass}--hovered`,
        ].filter(Boolean).join(' ') },
        React.createElement(CollapsibleProvider, null,
            React.createElement("div", { className: `${baseClass}__toggle-wrap`, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false) },
                dragHandleProps && (React.createElement("div", { className: `${baseClass}__drag`, ...dragHandleProps },
                    React.createElement(DragHandle, null))),
                React.createElement("button", { type: "button", className: [
                        `${baseClass}__toggle`,
                        `${baseClass}__toggle--${collapsed ? 'collapsed' : 'open'}`,
                    ].filter(Boolean).join(' '), onClick: () => {
                        if (typeof onToggle === 'function')
                            onToggle(!collapsed);
                        setCollapsedLocal(!collapsed);
                    } },
                    React.createElement("span", null, "Toggle block")),
                header && (React.createElement("div", { className: [
                        `${baseClass}__header-wrap`,
                        dragHandleProps && `${baseClass}__header-wrap--has-drag-handle`,
                    ].filter(Boolean).join(' ') }, header && header)),
                React.createElement("div", { className: `${baseClass}__actions-wrap` },
                    actions && (React.createElement("div", { className: `${baseClass}__actions` }, actions)),
                    React.createElement(Chevron, { className: `${baseClass}__indicator` }))),
            React.createElement(AnimateHeight, { height: collapsed ? 0 : 'auto', duration: 200 },
                React.createElement("div", { className: `${baseClass}__content` }, children)))));
};
