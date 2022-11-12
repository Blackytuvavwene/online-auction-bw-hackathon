import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useConfig } from '../../utilities/Config';
import { useAuth } from '../../utilities/Auth';
import MinimalTemplate from '../../templates/Minimal';
import Form from '../../forms/Form';
import Email from '../../forms/field-types/Email';
import FormSubmit from '../../forms/Submit';
import Button from '../../elements/Button';
import Meta from '../../utilities/Meta';
import './index.scss';
const baseClass = 'forgot-password';
const ForgotPassword = () => {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const { user } = useAuth();
    const { admin: { user: userSlug }, serverURL, routes: { admin, api, }, } = useConfig();
    const handleResponse = (res) => {
        res.json()
            .then(() => {
            setHasSubmitted(true);
        }, () => {
            toast.error('The email provided is not valid.');
        });
    };
    if (user) {
        return (React.createElement(MinimalTemplate, { className: baseClass },
            React.createElement(Meta, { title: "Forgot Password", description: "Forgot password", keywords: "Forgot, Password, Payload, CMS" }),
            React.createElement("h1", null, "You're already logged in"),
            React.createElement("p", null,
                "To change your password, go to your",
                ' ',
                React.createElement(Link, { to: `${admin}/account` }, "account"),
                ' ',
                "and edit your password there."),
            React.createElement("br", null),
            React.createElement(Button, { el: "link", buttonStyle: "secondary", to: admin }, "Back to Dashboard")));
    }
    if (hasSubmitted) {
        return (React.createElement(MinimalTemplate, { className: baseClass },
            React.createElement("h1", null, "Email sent"),
            React.createElement("p", null, "Check your email for a link that will allow you to securely reset your password.")));
    }
    return (React.createElement(MinimalTemplate, { className: baseClass },
        React.createElement(Form, { handleResponse: handleResponse, method: "post", action: `${serverURL}${api}/${userSlug}/forgot-password` },
            React.createElement("h1", null, "Forgot Password"),
            React.createElement("p", null, "Please enter your email below. You will receive an email message with instructions on how to reset your password."),
            React.createElement(Email, { label: "Email Address", name: "email", admin: { autoComplete: 'email' }, required: true }),
            React.createElement(FormSubmit, null, "Submit")),
        React.createElement(Link, { to: `${admin}/login` }, "Back to login")));
};
export default ForgotPassword;
