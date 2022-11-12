import React from 'react';
import './index.scss';
const baseClass = 'id-label';
const IDLabel = ({ id, prefix = 'ID:' }) => (React.createElement("div", { className: baseClass },
    prefix,
    "\u00A0\u00A0",
    id));
export default IDLabel;
