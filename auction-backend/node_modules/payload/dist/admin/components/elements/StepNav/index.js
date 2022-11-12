import React, { useState, createContext, useContext, } from 'react';
import { Link } from 'react-router-dom';
import Chevron from '../../icons/Chevron';
import './index.scss';
const Context = createContext({});
const StepNavProvider = ({ children }) => {
    const [stepNav, setStepNav] = useState([]);
    return (React.createElement(Context.Provider, { value: {
            stepNav,
            setStepNav,
        } }, children));
};
const useStepNav = () => useContext(Context);
const StepNav = () => {
    const dashboardLabel = React.createElement("span", null, "Dashboard");
    const { stepNav } = useStepNav();
    return (React.createElement("nav", { className: "step-nav" },
        stepNav.length > 0
            ? (React.createElement(Link, { to: "/admin" },
                dashboardLabel,
                React.createElement(Chevron, null)))
            : dashboardLabel,
        stepNav.map((item, i) => {
            const StepLabel = React.createElement("span", { key: i }, item.label);
            const Step = stepNav.length === i + 1
                ? StepLabel
                : (React.createElement(Link, { to: item.url, key: i },
                    StepLabel,
                    React.createElement(Chevron, null)));
            return Step;
        })));
};
export { StepNavProvider, useStepNav, };
export default StepNav;
