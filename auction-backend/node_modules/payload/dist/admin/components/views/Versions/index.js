import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import format from 'date-fns/format';
import { useConfig } from '../../utilities/Config';
import usePayloadAPI from '../../../hooks/usePayloadAPI';
import Eyebrow from '../../elements/Eyebrow';
import Loading from '../../elements/Loading';
import { useStepNav } from '../../elements/StepNav';
import Meta from '../../utilities/Meta';
import IDLabel from '../../elements/IDLabel';
import { getColumns } from './columns';
import Table from '../../elements/Table';
import Paginator from '../../elements/Paginator';
import PerPage from '../../elements/PerPage';
import { useSearchParams } from '../../utilities/SearchParams';
import { Banner, Pill } from '../..';
import { shouldIncrementVersionCount } from '../../../../versions/shouldIncrementVersionCount';
import { Gutter } from '../../elements/Gutter';
import './index.scss';
const baseClass = 'versions';
const Versions = ({ collection, global }) => {
    var _a, _b, _c;
    const { serverURL, routes: { admin, api }, admin: { dateFormat } } = useConfig();
    const { setStepNav } = useStepNav();
    const { params: { id } } = useRouteMatch();
    const [tableColumns] = useState(() => getColumns(collection, global));
    const [fetchURL, setFetchURL] = useState('');
    const { page, sort, limit } = useSearchParams();
    let docURL;
    let entityLabel;
    let slug;
    let entity;
    let editURL;
    if (collection) {
        ({ slug } = collection);
        docURL = `${serverURL}${api}/${slug}/${id}`;
        entityLabel = collection.labels.singular;
        entity = collection;
        editURL = `${admin}/collections/${collection.slug}/${id}`;
    }
    if (global) {
        ({ slug } = global);
        docURL = `${serverURL}${api}/globals/${slug}`;
        entityLabel = global.label;
        entity = global;
        editURL = `${admin}/globals/${global.slug}`;
    }
    const useAsTitle = ((_a = collection === null || collection === void 0 ? void 0 : collection.admin) === null || _a === void 0 ? void 0 : _a.useAsTitle) || 'id';
    const [{ data: doc }] = usePayloadAPI(docURL, { initialParams: { draft: 'true' } });
    const [{ data: versionsData, isLoading: isLoadingVersions }, { setParams }] = usePayloadAPI(fetchURL);
    useEffect(() => {
        let nav = [];
        if (collection) {
            let docLabel = '';
            if (doc) {
                if (useAsTitle) {
                    if (doc[useAsTitle]) {
                        docLabel = doc[useAsTitle];
                    }
                    else {
                        docLabel = '[Untitled]';
                    }
                }
                else {
                    docLabel = doc.id;
                }
            }
            nav = [
                {
                    url: `${admin}/collections/${collection.slug}`,
                    label: collection.labels.plural,
                },
                {
                    label: docLabel,
                    url: editURL,
                },
                {
                    label: 'Versions',
                },
            ];
        }
        if (global) {
            nav = [
                {
                    url: editURL,
                    label: global.label,
                },
                {
                    label: 'Versions',
                },
            ];
        }
        setStepNav(nav);
    }, [setStepNav, collection, global, useAsTitle, doc, admin, id, editURL]);
    useEffect(() => {
        const params = {
            depth: 1,
            page: undefined,
            sort: undefined,
            limit,
            where: {},
        };
        if (page)
            params.page = page;
        if (sort)
            params.sort = sort;
        let fetchURLToSet;
        if (collection) {
            fetchURLToSet = `${serverURL}${api}/${collection.slug}/versions`;
            params.where = {
                parent: {
                    equals: id,
                },
            };
        }
        if (global) {
            fetchURLToSet = `${serverURL}${api}/globals/${global.slug}/versions`;
        }
        // Performance enhancement
        // Setting the Fetch URL this way
        // prevents a double-fetch
        setFetchURL(fetchURLToSet);
        setParams(params);
    }, [setParams, page, sort, limit, serverURL, api, id, global, collection]);
    let useIDLabel = doc[useAsTitle] === (doc === null || doc === void 0 ? void 0 : doc.id);
    let heading;
    let metaDesc;
    let metaTitle;
    if (collection) {
        metaTitle = `Versions - ${doc[useAsTitle]} - ${entityLabel}`;
        metaDesc = `Viewing versions for the ${entityLabel} ${doc[useAsTitle]}`;
        heading = (doc === null || doc === void 0 ? void 0 : doc[useAsTitle]) || '[Untitled]';
    }
    if (global) {
        metaTitle = `Versions - ${entityLabel}`;
        metaDesc = `Viewing versions for the global ${entityLabel}`;
        heading = entityLabel;
        useIDLabel = false;
    }
    const docStatus = doc === null || doc === void 0 ? void 0 : doc._status;
    const docUpdatedAt = doc === null || doc === void 0 ? void 0 : doc.updatedAt;
    const showParentDoc = (versionsData === null || versionsData === void 0 ? void 0 : versionsData.page) === 1 && shouldIncrementVersionCount({ entity, docStatus, versions: versionsData });
    return (React.createElement("div", { className: baseClass },
        React.createElement(Meta, { title: metaTitle, description: metaDesc }),
        React.createElement(Eyebrow, null),
        React.createElement(Gutter, { className: `${baseClass}__wrap` },
            React.createElement("header", { className: `${baseClass}__header` },
                React.createElement("div", { className: `${baseClass}__intro` }, "Showing versions for:"),
                useIDLabel && (React.createElement(IDLabel, { id: doc === null || doc === void 0 ? void 0 : doc.id })),
                !useIDLabel && (React.createElement("h1", null, heading))),
            isLoadingVersions && (React.createElement(Loading, null)),
            showParentDoc && (React.createElement(Banner, { type: docStatus === 'published' ? 'success' : undefined, className: `${baseClass}__parent-doc` },
                "Current",
                ' ',
                docStatus,
                ' ',
                "document -",
                ' ',
                format(new Date(docUpdatedAt), dateFormat),
                React.createElement("div", { className: `${baseClass}__parent-doc-pills` },
                    "\u00A0\u00A0",
                    React.createElement(Pill, { pillStyle: "white", to: editURL }, "Edit")))),
            (versionsData === null || versionsData === void 0 ? void 0 : versionsData.totalDocs) > 0 && (React.createElement(React.Fragment, null,
                React.createElement(Table, { data: versionsData === null || versionsData === void 0 ? void 0 : versionsData.docs, columns: tableColumns }),
                React.createElement("div", { className: `${baseClass}__page-controls` },
                    React.createElement(Paginator, { limit: versionsData.limit, totalPages: versionsData.totalPages, page: versionsData.page, hasPrevPage: versionsData.hasPrevPage, hasNextPage: versionsData.hasNextPage, prevPage: versionsData.prevPage, nextPage: versionsData.nextPage, numberOfNeighbors: 1 }),
                    (versionsData === null || versionsData === void 0 ? void 0 : versionsData.totalDocs) > 0 && (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: `${baseClass}__page-info` },
                            (versionsData.page * versionsData.limit) - (versionsData.limit - 1),
                            "-",
                            versionsData.totalPages > 1 && versionsData.totalPages !== versionsData.page ? (versionsData.limit * versionsData.page) : versionsData.totalDocs,
                            ' ',
                            "of",
                            ' ',
                            versionsData.totalDocs),
                        React.createElement(PerPage, { limits: (_c = (_b = collection === null || collection === void 0 ? void 0 : collection.admin) === null || _b === void 0 ? void 0 : _b.pagination) === null || _c === void 0 ? void 0 : _c.limits, limit: limit ? Number(limit) : 10 })))))),
            (versionsData === null || versionsData === void 0 ? void 0 : versionsData.totalDocs) === 0 && (React.createElement("div", { className: `${baseClass}__no-versions` }, "No further versions found")))));
};
export default Versions;
