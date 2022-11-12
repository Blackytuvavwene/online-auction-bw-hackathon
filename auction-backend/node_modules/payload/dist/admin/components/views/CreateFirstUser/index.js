import React from 'react';
import { useConfig } from '../../utilities/Config';
import { useAuth } from '../../utilities/Auth';
import MinimalTemplate from '../../templates/Minimal';
import Meta from '../../utilities/Meta';
import Form from '../../forms/Form';
import RenderFields from '../../forms/RenderFields';
import fieldTypes from '../../forms/field-types';
import FormSubmit from '../../forms/Submit';
import './index.scss';
const baseClass = 'create-first-user';
const CreateFirstUser = (props) => {
    const { setInitialized } = props;
    const { setToken } = useAuth();
    const { admin: { user: userSlug }, collections, serverURL, routes: { admin, api }, } = useConfig();
    const userConfig = collections.find((collection) => collection.slug === userSlug);
    const onSuccess = (json) => {
        var _a;
        if ((_a = json === null || json === void 0 ? void 0 : json.user) === null || _a === void 0 ? void 0 : _a.token) {
            setToken(json.user.token);
        }
        setInitialized(true);
    };
    const fields = [
        {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            required: true,
        }, {
            name: 'password',
            label: 'Password',
            type: 'password',
            required: true,
        }, {
            name: 'confirm-password',
            label: 'Confirm Password',
            type: 'confirmPassword',
            required: true,
        },
    ];
    return (React.createElement(MinimalTemplate, { className: baseClass },
        React.createElement("h1", null, "Welcome"),
        React.createElement("p", null, "To begin, create your first user."),
        React.createElement(Meta, { title: "Create First User", description: "Create first user", keywords: "Create, Payload, CMS" }),
        React.createElement(Form, { onSuccess: onSuccess, method: "post", redirect: admin, action: `${serverURL}${api}/${userSlug}/first-register`, validationOperation: "create" },
            React.createElement(RenderFields, { fieldSchema: [
                    ...fields,
                    ...userConfig.fields,
                ], fieldTypes: fieldTypes }),
            React.createElement(FormSubmit, null, "Create"))));
};
export default CreateFirstUser;
