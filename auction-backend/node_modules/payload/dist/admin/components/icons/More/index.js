import React from 'react';
import './index.scss';
const DragHandle = ({ className }) => (React.createElement("svg", { className: [
        'icon icon--more',
        className,
    ].filter(Boolean).join(' '), viewBox: "0 0 25 25", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("circle", { cx: "16.3872", cy: "12.5", r: "1", className: "fill" }),
    React.createElement("circle", { cx: "12.3872", cy: "12.5", r: "1", className: "fill" }),
    React.createElement("circle", { cx: "8.61279", cy: "12.5", r: "1", className: "fill" })));
export default DragHandle;
