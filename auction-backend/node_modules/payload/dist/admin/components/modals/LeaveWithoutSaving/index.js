import React from 'react';
import NavigationPrompt from 'react-router-navigation-prompt';
import { useAuth } from '../../utilities/Auth';
import { useFormModified } from '../../forms/Form/context';
import MinimalTemplate from '../../templates/Minimal';
import Button from '../../elements/Button';
import './index.scss';
const modalSlug = 'leave-without-saving';
const LeaveWithoutSaving = () => {
    const modified = useFormModified();
    const { user } = useAuth();
    return (React.createElement(NavigationPrompt, { when: Boolean(modified && user) }, ({ onConfirm, onCancel }) => (React.createElement("div", { className: modalSlug },
        React.createElement(MinimalTemplate, { className: `${modalSlug}__template` },
            React.createElement("h1", null, "Leave without saving"),
            React.createElement("p", null, "Your changes have not been saved. If you leave now, you will lose your changes."),
            React.createElement(Button, { onClick: onCancel, buttonStyle: "secondary" }, "Stay on this page"),
            React.createElement(Button, { onClick: onConfirm }, "Leave anyway"))))));
};
export default LeaveWithoutSaving;
