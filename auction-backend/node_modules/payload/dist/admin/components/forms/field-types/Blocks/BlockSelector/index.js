import React, { useState, useEffect } from 'react';
import BlockSearch from './BlockSearch';
import BlocksContainer from './BlocksContainer';
const baseClass = 'block-selector';
const BlockSelector = (props) => {
    const { blocks, close, parentIsHovered, watchParentHover, ...remainingProps } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBlocks, setFilteredBlocks] = useState(blocks);
    const [isBlockSelectorHovered, setBlockSelectorHovered] = useState(false);
    useEffect(() => {
        const matchingBlocks = blocks.reduce((matchedBlocks, block) => {
            if (block.slug.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
                matchedBlocks.push(block);
            return matchedBlocks;
        }, []);
        setFilteredBlocks(matchingBlocks);
    }, [searchTerm, blocks]);
    useEffect(() => {
        if (!parentIsHovered && !isBlockSelectorHovered && close && watchParentHover)
            close();
    }, [isBlockSelectorHovered, parentIsHovered, close, watchParentHover]);
    return (React.createElement("div", { className: baseClass, onMouseEnter: () => setBlockSelectorHovered(true), onMouseLeave: () => setBlockSelectorHovered(false) },
        React.createElement(BlockSearch, { setSearchTerm: setSearchTerm }),
        React.createElement(BlocksContainer, { blocks: filteredBlocks, close: close, ...remainingProps })));
};
export default BlockSelector;
