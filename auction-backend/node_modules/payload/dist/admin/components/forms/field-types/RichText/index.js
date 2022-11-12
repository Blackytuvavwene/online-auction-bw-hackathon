import React, { Suspense, lazy } from 'react';
import Loading from '../../../elements/Loading';
const RichText = lazy(() => import('./RichText'));
const RichTextField = (props) => (React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
    React.createElement(RichText, { ...props })));
export default RichTextField;
