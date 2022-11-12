import React, { Suspense, lazy } from 'react';
import Loading from '../../../elements/Loading';
const Code = lazy(() => import('./Code'));
const CodeField = (props) => (React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
    React.createElement(Code, { ...props })));
export default CodeField;
