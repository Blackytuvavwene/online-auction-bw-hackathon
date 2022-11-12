import React from 'react';
const BlocksCell = ({ data, field }) => {
    const selectedBlocks = data ? data.map(({ blockType }) => blockType) : [];
    const blockLabels = field.blocks.map((s) => ({ slug: s.slug, label: s.labels.singular }));
    let label = `0 ${field.labels.plural}`;
    const formatBlockList = (blocks) => blocks.map((b) => {
        var _a;
        const filtered = (_a = blockLabels.filter((f) => f.slug === b)) === null || _a === void 0 ? void 0 : _a[0];
        return filtered === null || filtered === void 0 ? void 0 : filtered.label;
    }).join(', ');
    const itemsToShow = 5;
    if (selectedBlocks.length > itemsToShow) {
        const more = selectedBlocks.length - itemsToShow;
        label = `${selectedBlocks.length} ${field.labels.plural} - ${formatBlockList(selectedBlocks.slice(0, itemsToShow))} and ${more} more`;
    }
    else if (selectedBlocks.length > 0) {
        label = `${selectedBlocks.length} ${selectedBlocks.length === 1 ? field.labels.singular : field.labels.plural} - ${formatBlockList(selectedBlocks)}`;
    }
    return (React.createElement("span", null, label));
};
export default BlocksCell;
