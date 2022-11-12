import React, { useEffect } from 'react';
import { useConfig } from '../../utilities/Config';
import Eyebrow from '../../elements/Eyebrow';
import { useStepNav } from '../../elements/StepNav';
import Button from '../../elements/Button';
import Meta from '../../utilities/Meta';
import { Gutter } from '../../elements/Gutter';
const baseClass = 'not-found';
const NotFound = () => {
    const { setStepNav } = useStepNav();
    const { routes: { admin } } = useConfig();
    useEffect(() => {
        setStepNav([{
                label: 'Not Found',
            }]);
    }, [setStepNav]);
    return (React.createElement("div", { className: baseClass },
        React.createElement(Meta, { title: "Not Found", description: "Page not found", keywords: "404, Not found, Payload, CMS" }),
        React.createElement(Eyebrow, null),
        React.createElement(Gutter, { className: `${baseClass}__wrap` },
            React.createElement("h1", null, "Nothing found"),
            React.createElement("p", null, "Sorry\u2014there is nothing to correspond with your request."),
            React.createElement(Button, { el: "link", to: `${admin}` }, "Back to Dashboard"))));
};
export default NotFound;
