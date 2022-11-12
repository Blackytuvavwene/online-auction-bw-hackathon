import React, { useState, useEffect } from 'react';
import { useConfig } from '../../utilities/Config';
import { useAuth } from '../../utilities/Auth';
import { useStepNav } from '../../elements/StepNav';
import RenderCustomComponent from '../../utilities/RenderCustomComponent';
import DefaultDashboard from './Default';
const Dashboard = () => {
    const { permissions } = useAuth();
    const { setStepNav } = useStepNav();
    const [filteredGlobals, setFilteredGlobals] = useState([]);
    const { collections, globals, admin: { components: { views: { Dashboard: CustomDashboard, } = {
        Dashboard: undefined,
    }, } = {}, } = {}, } = useConfig();
    useEffect(() => {
        setFilteredGlobals(globals.filter((global) => { var _a, _b, _c; return (_c = (_b = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.globals) === null || _a === void 0 ? void 0 : _a[global.slug]) === null || _b === void 0 ? void 0 : _b.read) === null || _c === void 0 ? void 0 : _c.permission; }));
    }, [permissions, globals]);
    useEffect(() => {
        setStepNav([]);
    }, [setStepNav]);
    return (React.createElement(RenderCustomComponent, { DefaultComponent: DefaultDashboard, CustomComponent: CustomDashboard, componentProps: {
            globals: filteredGlobals,
            collections: collections.filter((collection) => { var _a, _b, _c; return (_c = (_b = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.collections) === null || _a === void 0 ? void 0 : _a[collection.slug]) === null || _b === void 0 ? void 0 : _b.read) === null || _c === void 0 ? void 0 : _c.permission; }),
            permissions,
        } }));
};
export default Dashboard;
