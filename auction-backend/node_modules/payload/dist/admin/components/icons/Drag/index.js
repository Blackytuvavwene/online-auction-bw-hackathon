import React from 'react';
import './index.scss';
const DragHandle = ({ className }) => (React.createElement("svg", { className: [
        'icon icon--drag-handle',
        className,
    ].filter(Boolean).join(' '), viewBox: "0 0 25 25", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("circle", { cx: "10.468", cy: "14.5", r: "1", className: "fill" }),
    React.createElement("circle", { cx: "14.532", cy: "14.5", r: "1", className: "fill" }),
    React.createElement("circle", { cx: "10.468", cy: "11.35", r: "1", className: "fill" }),
    React.createElement("circle", { cx: "14.532", cy: "11.35", r: "1", className: "fill" }),
    React.createElement("circle", { cx: "10.468", cy: "8.3", r: "1", className: "fill" }),
    React.createElement("circle", { cx: "14.532", cy: "8.3", r: "1", className: "fill" })));
export default DragHandle;
