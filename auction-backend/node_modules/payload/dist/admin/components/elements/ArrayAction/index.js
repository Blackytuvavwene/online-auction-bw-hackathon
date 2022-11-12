import React from 'react';
import Popup from '../Popup';
import More from '../../icons/More';
import Chevron from '../../icons/Chevron';
import Plus from '../../icons/Plus';
import X from '../../icons/X';
import Copy from '../../icons/Copy';
import './index.scss';
const baseClass = 'array-actions';
export const ArrayAction = ({ moveRow, index, rowCount, addRow, duplicateRow, removeRow, }) => {
    return (React.createElement(Popup, { horizontalAlign: "center", className: baseClass, buttonClassName: `${baseClass}__button`, button: React.createElement(More, null), render: ({ close }) => {
            return (React.createElement(React.Fragment, null,
                index !== 0 && (React.createElement("button", { className: `${baseClass}__action ${baseClass}__move-up`, type: "button", onClick: () => {
                        moveRow(index, index - 1);
                        close();
                    } },
                    React.createElement(Chevron, null),
                    "Move Up")),
                index < rowCount - 1 && (React.createElement("button", { className: `${baseClass}__action ${baseClass}__move-down`, type: "button", onClick: () => {
                        moveRow(index, index + 1);
                        close();
                    } },
                    React.createElement(Chevron, null),
                    "Move Down")),
                React.createElement("button", { className: `${baseClass}__action ${baseClass}__add`, type: "button", onClick: () => {
                        addRow(index);
                        close();
                    } },
                    React.createElement(Plus, null),
                    "Add Below"),
                React.createElement("button", { className: `${baseClass}__action ${baseClass}__duplicate`, type: "button", onClick: () => {
                        duplicateRow(index);
                        close();
                    } },
                    React.createElement(Copy, null),
                    "Duplicate"),
                React.createElement("button", { className: `${baseClass}__action ${baseClass}__remove`, type: "button", onClick: () => {
                        removeRow(index);
                        close();
                    } },
                    React.createElement(X, null),
                    "Remove")));
        } }));
};
