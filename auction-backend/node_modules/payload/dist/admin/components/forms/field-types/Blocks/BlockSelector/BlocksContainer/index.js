import React from 'react';
import BlockSelection from '../BlockSelection';
import './index.scss';
const baseClass = 'blocks-container';
const BlocksContainer = (props) => {
    const { blocks, ...remainingProps } = props;
    return (React.createElement("div", { className: baseClass }, blocks === null || blocks === void 0 ? void 0 : blocks.map((block, index) => (React.createElement(BlockSelection, { key: index, block: block, ...remainingProps })))));
};
export default BlocksContainer;
