import React from 'react';
import RenderFieldsToDiff from '../..';
const baseClass = 'tabs-diff';
const Tabs = ({ version, comparison, permissions, field, locales, fieldComponents, }) => (React.createElement("div", { className: baseClass },
    React.createElement("div", { className: `${baseClass}__wrap` }, field.tabs.map((tab, i) => {
        return (React.createElement(RenderFieldsToDiff, { key: i, locales: locales, version: version, comparison: comparison, fieldPermissions: permissions, fields: tab.fields, fieldComponents: fieldComponents }));
    }))));
export default Tabs;
