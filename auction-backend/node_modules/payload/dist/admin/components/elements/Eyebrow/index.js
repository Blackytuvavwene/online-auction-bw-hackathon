import React from 'react';
import StepNav from '../StepNav';
import { Gutter } from '../Gutter';
import './index.scss';
const baseClass = 'eyebrow';
const Eyebrow = ({ actions }) => (React.createElement("div", { className: baseClass },
    React.createElement(Gutter, { className: `${baseClass}__wrap` },
        React.createElement(StepNav, null),
        actions)));
export default Eyebrow;
