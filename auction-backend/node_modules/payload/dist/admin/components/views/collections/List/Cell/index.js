import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '../../../../utilities/Config';
import RenderCustomComponent from '../../../../utilities/RenderCustomComponent';
import cellComponents from './field-types';
const DefaultCell = (props) => {
    const { field, colIndex, collection: { slug, }, cellData, rowData: { id, } = {}, } = props;
    const { routes: { admin } } = useConfig();
    let WrapElement = 'span';
    const wrapElementProps = {};
    if (colIndex === 0) {
        WrapElement = Link;
        wrapElementProps.to = `${admin}/collections/${slug}/${id}`;
    }
    const CellComponent = cellData && cellComponents[field.type];
    if (!CellComponent) {
        return (React.createElement(WrapElement, { ...wrapElementProps },
            (cellData === '' || typeof cellData === 'undefined') && `<No ${typeof field.label === 'string' ? field.label : 'data'}>`,
            typeof cellData === 'string' && cellData,
            typeof cellData === 'number' && cellData,
            typeof cellData === 'object' && JSON.stringify(cellData)));
    }
    return (React.createElement(WrapElement, { ...wrapElementProps },
        React.createElement(CellComponent, { field: field, data: cellData })));
};
const Cell = (props) => {
    const { colIndex, collection, cellData, rowData, field, field: { admin: { components: { Cell: CustomCell, } = {}, } = {}, }, } = props;
    return (React.createElement(RenderCustomComponent, { componentProps: {
            rowData,
            colIndex,
            cellData,
            collection,
            field,
        }, CustomComponent: CustomCell, DefaultComponent: DefaultCell }));
};
export default Cell;
