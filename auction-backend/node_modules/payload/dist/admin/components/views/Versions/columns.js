import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import format from 'date-fns/format';
import { useConfig } from '../../utilities/Config';
import SortColumn from '../../elements/SortColumn';
import { Pill } from '../..';
const CreatedAtCell = ({ collection, global, id, date }) => {
    const { routes: { admin }, admin: { dateFormat } } = useConfig();
    const { params: { id: docID } } = useRouteMatch();
    let to;
    if (collection)
        to = `${admin}/collections/${collection.slug}/${docID}/versions/${id}`;
    if (global)
        to = `${admin}/globals/${global.slug}/versions/${id}`;
    return (React.createElement(Link, { to: to }, date && format(new Date(date), dateFormat)));
};
const TextCell = ({ children }) => (React.createElement("span", null, children));
export const getColumns = (collection, global) => [
    {
        accessor: 'updatedAt',
        components: {
            Heading: (React.createElement(SortColumn, { label: "Updated At", name: "updatedAt" })),
            renderCell: (row, data) => (React.createElement(CreatedAtCell, { collection: collection, global: global, id: row === null || row === void 0 ? void 0 : row.id, date: data })),
        },
    },
    {
        accessor: 'id',
        components: {
            Heading: (React.createElement(SortColumn, { label: "Version ID", disable: true, name: "id" })),
            renderCell: (row, data) => React.createElement(TextCell, null, data),
        },
    },
    {
        accessor: 'autosave',
        components: {
            Heading: (React.createElement(SortColumn, { label: "Type", name: "autosave", disable: true })),
            renderCell: (row) => (React.createElement(TextCell, null,
                (row === null || row === void 0 ? void 0 : row.autosave) && (React.createElement(React.Fragment, null,
                    React.createElement(Pill, null, "Autosave"),
                    "\u00A0\u00A0")),
                (row === null || row === void 0 ? void 0 : row.version._status) === 'published' && (React.createElement(React.Fragment, null,
                    React.createElement(Pill, { pillStyle: "success" }, "Published"),
                    "\u00A0\u00A0")),
                (row === null || row === void 0 ? void 0 : row.version._status) === 'draft' && (React.createElement(Pill, null, "Draft")))),
        },
    },
];
