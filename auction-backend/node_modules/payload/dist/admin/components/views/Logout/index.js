import React, { useEffect } from 'react';
import { useConfig } from '../../utilities/Config';
import { useAuth } from '../../utilities/Auth';
import Minimal from '../../templates/Minimal';
import Button from '../../elements/Button';
import Meta from '../../utilities/Meta';
import './index.scss';
const baseClass = 'logout';
const Logout = (props) => {
    const { inactivity } = props;
    const { logOut } = useAuth();
    const { routes: { admin } } = useConfig();
    useEffect(() => {
        logOut();
    }, [logOut]);
    return (React.createElement(Minimal, { className: baseClass },
        React.createElement(Meta, { title: "Logout", description: "Logout user", keywords: "Logout, Payload, CMS" }),
        React.createElement("div", { className: `${baseClass}__wrap` },
            inactivity && (React.createElement("h2", null, "You have been logged out due to inactivity.")),
            !inactivity && (React.createElement("h2", null, "You have been logged out successfully.")),
            React.createElement("br", null),
            React.createElement(Button, { el: "anchor", buttonStyle: "secondary", url: `${admin}/login` }, "Log back in"))));
};
export default Logout;
