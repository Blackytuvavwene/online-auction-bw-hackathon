import React, { useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import Chevron from '../../icons/Chevron';
import { usePreferences } from '../../utilities/Preferences';
import './index.scss';
const baseClass = 'nav-group';
const NavGroup = ({ children, label, }) => {
    const [collapsed, setCollapsed] = useState(true);
    const [animate, setAnimate] = useState(false);
    const { getPreference, setPreference } = usePreferences();
    const preferencesKey = `collapsed-${label}-groups`;
    useEffect(() => {
        if (label) {
            const setCollapsedFromPreferences = async () => {
                const preferences = await getPreference(preferencesKey) || [];
                setCollapsed(preferences.indexOf(label) !== -1);
            };
            setCollapsedFromPreferences();
        }
    }, [getPreference, label, preferencesKey]);
    if (label) {
        const toggleCollapsed = async () => {
            setAnimate(true);
            let preferences = await getPreference(preferencesKey) || [];
            if (collapsed) {
                preferences = preferences.filter((preference) => label !== preference);
            }
            else {
                preferences.push(label);
            }
            setPreference(preferencesKey, preferences);
            setCollapsed(!collapsed);
        };
        return (React.createElement("div", { id: `nav-group-${label}`, className: [
                `${baseClass}`,
                `${label}`,
                collapsed && `${baseClass}--collapsed`,
            ].filter(Boolean)
                .join(' ') },
            React.createElement("button", { type: "button", className: [
                    `${baseClass}__toggle`,
                    `${baseClass}__toggle--${collapsed ? 'collapsed' : 'open'}`,
                ].filter(Boolean)
                    .join(' '), onClick: toggleCollapsed },
                React.createElement("div", { className: `${baseClass}__label` }, label),
                React.createElement(Chevron, { className: `${baseClass}__indicator` })),
            React.createElement(AnimateHeight, { height: collapsed ? 0 : 'auto', duration: animate ? 200 : 0 },
                React.createElement("div", { className: `${baseClass}__content` }, children))));
    }
    return (React.createElement(React.Fragment, null, children));
};
export default NavGroup;
