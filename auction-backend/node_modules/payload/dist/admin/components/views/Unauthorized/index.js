import React from 'react';
import { useConfig } from '../../utilities/Config';
import Button from '../../elements/Button';
import Meta from '../../utilities/Meta';
import MinimalTemplate from '../../templates/Minimal';
const Unauthorized = () => {
    const { routes: { admin } } = useConfig();
    return (React.createElement(MinimalTemplate, { className: "unauthorized" },
        React.createElement(Meta, { title: "Unauthorized", description: "Unauthorized", keywords: "Unauthorized, Payload, CMS" }),
        React.createElement("h2", null, "Unauthorized"),
        React.createElement("p", null, "You are not allowed to access this page."),
        React.createElement("br", null),
        React.createElement(Button, { el: "link", to: `${admin}/logout` }, "Log out")));
};
export default Unauthorized;
