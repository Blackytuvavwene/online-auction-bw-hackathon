import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useConfig } from '../../utilities/Config';
import { useAuth } from '../../utilities/Auth';
import MinimalTemplate from '../../templates/Minimal';
import Form from '../../forms/Form';
import Password from '../../forms/field-types/Password';
import ConfirmPassword from '../../forms/field-types/ConfirmPassword';
import FormSubmit from '../../forms/Submit';
import Button from '../../elements/Button';
import Meta from '../../utilities/Meta';
import './index.scss';
import HiddenInput from '../../forms/field-types/HiddenInput';
const baseClass = 'reset-password';
const ResetPassword = () => {
    const { admin: { user: userSlug }, serverURL, routes: { admin, api } } = useConfig();
    const { token } = useParams();
    const history = useHistory();
    const { user, setToken } = useAuth();
    const onSuccess = (data) => {
        if (data.token) {
            setToken(data.token);
            history.push(`${admin}`);
        }
    };
    if (user) {
        return (React.createElement(MinimalTemplate, { className: baseClass },
            React.createElement(Meta, { title: "Reset Password", description: "Reset password", keywords: "Reset Password, Payload, CMS" }),
            React.createElement("div", { className: `${baseClass}__wrap` },
                React.createElement("h1", null, "Already logged in"),
                React.createElement("p", null,
                    "To log in with another user, you should",
                    ' ',
                    React.createElement(Link, { to: `${admin}/logout` }, "log out"),
                    ' ',
                    "first."),
                React.createElement("br", null),
                React.createElement(Button, { el: "link", buttonStyle: "secondary", to: admin }, "Back to Dashboard"))));
    }
    return (React.createElement(MinimalTemplate, { className: baseClass },
        React.createElement("div", { className: `${baseClass}__wrap` },
            React.createElement("h1", null, "Reset Password"),
            React.createElement(Form, { onSuccess: onSuccess, method: "post", action: `${serverURL}${api}/${userSlug}/reset-password`, redirect: admin },
                React.createElement(Password, { label: "New Password", name: "password", autoComplete: "off", required: true }),
                React.createElement(ConfirmPassword, null),
                React.createElement(HiddenInput, { name: "token", value: token }),
                React.createElement(FormSubmit, null, "Reset Password")))));
};
export default ResetPassword;
