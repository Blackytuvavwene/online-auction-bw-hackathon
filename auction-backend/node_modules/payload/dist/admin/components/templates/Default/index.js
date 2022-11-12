import React from 'react';
import { useConfig } from '../../utilities/Config';
import DefaultNav from '../../elements/Nav';
import RenderCustomComponent from '../../utilities/RenderCustomComponent';
import Meta from '../../utilities/Meta';
import './index.scss';
const baseClass = 'template-default';
const Default = ({ children, className }) => {
    const { admin: { components: { Nav: CustomNav, } = {
        Nav: undefined,
    }, } = {}, } = useConfig();
    const classes = [
        baseClass,
        className,
    ].filter(Boolean).join(' ');
    return (React.createElement("div", { className: classes },
        React.createElement(Meta, { title: "Dashboard", description: "Dashboard for Payload CMS", keywords: "Dashboard, Payload, CMS" }),
        React.createElement(RenderCustomComponent, { DefaultComponent: DefaultNav, CustomComponent: CustomNav }),
        React.createElement("div", { className: `${baseClass}__wrap` }, children)));
};
export default Default;
