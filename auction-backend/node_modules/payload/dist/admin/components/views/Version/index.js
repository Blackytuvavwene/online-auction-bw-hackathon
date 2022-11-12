import React, { Suspense, lazy } from 'react';
import Loading from '../../elements/Loading';
const VersionView = lazy(() => import('./Version'));
const Version = (props) => (React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
    React.createElement(VersionView, { ...props })));
export default Version;
