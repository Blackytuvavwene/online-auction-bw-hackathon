import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Route, Switch, withRouter, Redirect, } from 'react-router-dom';
import { useAuth } from './utilities/Auth';
import { useConfig } from './utilities/Config';
import List from './views/collections/List';
import DefaultTemplate from './templates/Default';
import { requests } from '../api';
import Loading from './elements/Loading';
import StayLoggedIn from './modals/StayLoggedIn';
import Versions from './views/Versions';
import Version from './views/Version';
import { DocumentInfoProvider } from './utilities/DocumentInfo';
const Dashboard = lazy(() => import('./views/Dashboard'));
const ForgotPassword = lazy(() => import('./views/ForgotPassword'));
const Login = lazy(() => import('./views/Login'));
const Logout = lazy(() => import('./views/Logout'));
const NotFound = lazy(() => import('./views/NotFound'));
const Verify = lazy(() => import('./views/Verify'));
const CreateFirstUser = lazy(() => import('./views/CreateFirstUser'));
const Edit = lazy(() => import('./views/collections/Edit'));
const EditGlobal = lazy(() => import('./views/Global'));
const ResetPassword = lazy(() => import('./views/ResetPassword'));
const Unauthorized = lazy(() => import('./views/Unauthorized'));
const Account = lazy(() => import('./views/Account'));
const Routes = () => {
    const [initialized, setInitialized] = useState(null);
    const { user, permissions, refreshCookie } = useAuth();
    const canAccessAdmin = permissions === null || permissions === void 0 ? void 0 : permissions.canAccessAdmin;
    const { admin: { user: userSlug, components: { routes: customRoutes, } = {}, }, routes, collections, globals, } = useConfig();
    const userCollection = collections.find(({ slug }) => slug === userSlug);
    useEffect(() => {
        const { slug } = userCollection;
        if (!userCollection.auth.disableLocalStrategy) {
            requests.get(`${routes.api}/${slug}/init`).then((res) => res.json().then((data) => {
                if (data && 'initialized' in data) {
                    setInitialized(data.initialized);
                }
            }));
        }
        else {
            setInitialized(true);
        }
    }, [routes, userCollection]);
    return (React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
        React.createElement(Route, { path: routes.admin, render: ({ match }) => {
                if (initialized === false) {
                    return (React.createElement(Switch, null,
                        React.createElement(Route, { path: `${match.url}/create-first-user` },
                            React.createElement(CreateFirstUser, { setInitialized: setInitialized })),
                        React.createElement(Route, null,
                            React.createElement(Redirect, { to: `${match.url}/create-first-user` }))));
                }
                if (initialized === true) {
                    if (typeof user === 'undefined' || (user && typeof canAccessAdmin === 'undefined')) {
                        return React.createElement(Loading, null);
                    }
                    return (React.createElement(Switch, null,
                        Array.isArray(customRoutes) && customRoutes.map(({ path, Component, strict, exact, sensitive }) => (React.createElement(Route, { key: `${match.url}${path}`, path: `${match.url}${path}`, strict: strict, exact: exact, sensitive: sensitive },
                            React.createElement(Component, { user: user, canAccessAdmin: canAccessAdmin })))),
                        React.createElement(Route, { path: `${match.url}/login` },
                            React.createElement(Login, null)),
                        React.createElement(Route, { path: `${match.url}/logout` },
                            React.createElement(Logout, null)),
                        React.createElement(Route, { path: `${match.url}/logout-inactivity` },
                            React.createElement(Logout, { inactivity: true })),
                        !userCollection.auth.disableLocalStrategy && (React.createElement(Route, { path: `${match.url}/forgot` },
                            React.createElement(ForgotPassword, null))),
                        !userCollection.auth.disableLocalStrategy && (React.createElement(Route, { path: `${match.url}/reset/:token` },
                            React.createElement(ResetPassword, null))),
                        collections.map((collection) => {
                            var _a;
                            if (((_a = collection === null || collection === void 0 ? void 0 : collection.auth) === null || _a === void 0 ? void 0 : _a.verify) && !collection.auth.disableLocalStrategy) {
                                return (React.createElement(Route, { key: `${collection.slug}-verify`, path: `${match.url}/${collection.slug}/verify/:token`, exact: true },
                                    React.createElement(Verify, { collection: collection })));
                            }
                            return null;
                        }),
                        React.createElement(Route, { render: () => {
                                if (user) {
                                    if (canAccessAdmin) {
                                        return (React.createElement(DefaultTemplate, null,
                                            React.createElement(Switch, null,
                                                React.createElement(Route, { path: `${match.url}/`, exact: true },
                                                    React.createElement(Dashboard, null)),
                                                React.createElement(Route, { path: `${match.url}/account` },
                                                    React.createElement(DocumentInfoProvider, { collection: collections.find(({ slug }) => slug === userSlug), id: user.id },
                                                        React.createElement(Account, null))),
                                                collections.reduce((collectionRoutes, collection) => {
                                                    const routesToReturn = [
                                                        ...collectionRoutes,
                                                        React.createElement(Route, { key: `${collection.slug}-list`, path: `${match.url}/collections/${collection.slug}`, exact: true, render: (routeProps) => {
                                                                var _a, _b, _c;
                                                                if ((_c = (_b = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.collections) === null || _a === void 0 ? void 0 : _a[collection.slug]) === null || _b === void 0 ? void 0 : _b.read) === null || _c === void 0 ? void 0 : _c.permission) {
                                                                    return (React.createElement(List, { ...routeProps, collection: collection }));
                                                                }
                                                                return React.createElement(Unauthorized, null);
                                                            } }),
                                                        React.createElement(Route, { key: `${collection.slug}-create`, path: `${match.url}/collections/${collection.slug}/create`, exact: true, render: (routeProps) => {
                                                                var _a, _b, _c;
                                                                if ((_c = (_b = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.collections) === null || _a === void 0 ? void 0 : _a[collection.slug]) === null || _b === void 0 ? void 0 : _b.create) === null || _c === void 0 ? void 0 : _c.permission) {
                                                                    return (React.createElement(DocumentInfoProvider, { collection: collection },
                                                                        React.createElement(Edit, { ...routeProps, collection: collection })));
                                                                }
                                                                return React.createElement(Unauthorized, null);
                                                            } }),
                                                        React.createElement(Route, { key: `${collection.slug}-edit`, path: `${match.url}/collections/${collection.slug}/:id`, exact: true, render: (routeProps) => {
                                                                var _a, _b, _c;
                                                                const { match: { params: { id } } } = routeProps;
                                                                if ((_c = (_b = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.collections) === null || _a === void 0 ? void 0 : _a[collection.slug]) === null || _b === void 0 ? void 0 : _b.read) === null || _c === void 0 ? void 0 : _c.permission) {
                                                                    return (React.createElement(DocumentInfoProvider, { key: `${collection.slug}-edit-${id}`, collection: collection, id: id },
                                                                        React.createElement(Edit, { isEditing: true, ...routeProps, collection: collection })));
                                                                }
                                                                return React.createElement(Unauthorized, null);
                                                            } }),
                                                    ];
                                                    if (collection.versions) {
                                                        routesToReturn.push(React.createElement(Route, { key: `${collection.slug}-versions`, path: `${match.url}/collections/${collection.slug}/:id/versions`, exact: true, render: (routeProps) => {
                                                                var _a, _b, _c;
                                                                if ((_c = (_b = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.collections) === null || _a === void 0 ? void 0 : _a[collection.slug]) === null || _b === void 0 ? void 0 : _b.readVersions) === null || _c === void 0 ? void 0 : _c.permission) {
                                                                    return (React.createElement(Versions, { ...routeProps, collection: collection }));
                                                                }
                                                                return React.createElement(Unauthorized, null);
                                                            } }));
                                                        routesToReturn.push(React.createElement(Route, { key: `${collection.slug}-view-version`, path: `${match.url}/collections/${collection.slug}/:id/versions/:versionID`, exact: true, render: (routeProps) => {
                                                                var _a, _b, _c;
                                                                if ((_c = (_b = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.collections) === null || _a === void 0 ? void 0 : _a[collection.slug]) === null || _b === void 0 ? void 0 : _b.readVersions) === null || _c === void 0 ? void 0 : _c.permission) {
                                                                    return (React.createElement(Version, { ...routeProps, collection: collection }));
                                                                }
                                                                return React.createElement(Unauthorized, null);
                                                            } }));
                                                    }
                                                    return routesToReturn;
                                                }, []),
                                                globals && globals.reduce((globalRoutes, global) => {
                                                    const routesToReturn = [
                                                        ...globalRoutes,
                                                        React.createElement(Route, { key: `${global.slug}`, path: `${match.url}/globals/${global.slug}`, exact: true, render: (routeProps) => {
                                                                var _a, _b, _c;
                                                                if ((_c = (_b = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.globals) === null || _a === void 0 ? void 0 : _a[global.slug]) === null || _b === void 0 ? void 0 : _b.read) === null || _c === void 0 ? void 0 : _c.permission) {
                                                                    return (React.createElement(DocumentInfoProvider, { global: global },
                                                                        React.createElement(EditGlobal, { ...routeProps, global: global })));
                                                                }
                                                                return React.createElement(Unauthorized, null);
                                                            } }),
                                                    ];
                                                    if (global.versions) {
                                                        routesToReturn.push(React.createElement(Route, { key: `${global.slug}-versions`, path: `${match.url}/globals/${global.slug}/versions`, exact: true, render: (routeProps) => {
                                                                var _a, _b, _c;
                                                                if ((_c = (_b = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.globals) === null || _a === void 0 ? void 0 : _a[global.slug]) === null || _b === void 0 ? void 0 : _b.readVersions) === null || _c === void 0 ? void 0 : _c.permission) {
                                                                    return (React.createElement(Versions, { ...routeProps, global: global }));
                                                                }
                                                                return React.createElement(Unauthorized, null);
                                                            } }));
                                                        routesToReturn.push(React.createElement(Route, { key: `${global.slug}-view-version`, path: `${match.url}/globals/${global.slug}/versions/:versionID`, exact: true, render: (routeProps) => {
                                                                var _a, _b, _c;
                                                                if ((_c = (_b = (_a = permissions === null || permissions === void 0 ? void 0 : permissions.globals) === null || _a === void 0 ? void 0 : _a[global.slug]) === null || _b === void 0 ? void 0 : _b.readVersions) === null || _c === void 0 ? void 0 : _c.permission) {
                                                                    return (React.createElement(Version, { ...routeProps, global: global }));
                                                                }
                                                                return React.createElement(Unauthorized, null);
                                                            } }));
                                                    }
                                                    return routesToReturn;
                                                }, []),
                                                React.createElement(Route, { path: `${match.url}*` },
                                                    React.createElement(NotFound, null)))));
                                    }
                                    if (canAccessAdmin === false) {
                                        return React.createElement(Unauthorized, null);
                                    }
                                    return React.createElement(Loading, null);
                                }
                                return React.createElement(Redirect, { to: `${match.url}/login` });
                            } }),
                        React.createElement(Route, { path: `${match.url}*` },
                            React.createElement(NotFound, null))));
                }
                return null;
            } }),
        React.createElement(StayLoggedIn, { refreshCookie: refreshCookie })));
};
export default withRouter(Routes);
