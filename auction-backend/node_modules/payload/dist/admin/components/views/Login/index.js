import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useConfig } from '../../utilities/Config';
import { useAuth } from '../../utilities/Auth';
import Logo from '../../graphics/Logo';
import MinimalTemplate from '../../templates/Minimal';
import Form from '../../forms/Form';
import Email from '../../forms/field-types/Email';
import Password from '../../forms/field-types/Password';
import FormSubmit from '../../forms/Submit';
import Button from '../../elements/Button';
import Meta from '../../utilities/Meta';
import './index.scss';
const baseClass = 'login';
const Login = () => {
    const history = useHistory();
    const { user, setToken } = useAuth();
    const { admin: { user: userSlug, components: { beforeLogin, afterLogin, } = {}, }, serverURL, routes: { admin, api, }, collections, } = useConfig();
    const collection = collections.find(({ slug }) => slug === userSlug);
    const onSuccess = (data) => {
        if (data.token) {
            setToken(data.token);
            history.push(admin);
        }
    };
    if (user) {
        return (React.createElement(MinimalTemplate, { className: baseClass },
            React.createElement(Meta, { title: "Login", description: "Login user", keywords: "Login, Payload, CMS" }),
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
        React.createElement(Meta, { title: "Login", description: "Login user", keywords: "Login, Payload, CMS" }),
        React.createElement("div", { className: `${baseClass}__brand` },
            React.createElement(Logo, null)),
        Array.isArray(beforeLogin) && beforeLogin.map((Component, i) => React.createElement(Component, { key: i })),
        !collection.auth.disableLocalStrategy && (React.createElement(Form, { disableSuccessStatus: true, waitForAutocomplete: true, onSuccess: onSuccess, method: "post", action: `${serverURL}${api}/${userSlug}/login` },
            React.createElement(Email, { label: "Email Address", name: "email", admin: { autoComplete: 'email' }, required: true }),
            React.createElement(Password, { label: "Password", name: "password", autoComplete: "off", required: true }),
            React.createElement(Link, { to: `${admin}/forgot` }, "Forgot password?"),
            React.createElement(FormSubmit, null, "Login"))),
        Array.isArray(afterLogin) && afterLogin.map((Component, i) => React.createElement(Component, { key: i }))));
};
export default Login;
