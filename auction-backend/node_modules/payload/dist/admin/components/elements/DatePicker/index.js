import React, { Suspense, lazy } from 'react';
import Loading from '../Loading';
const DatePicker = lazy(() => import('./DatePicker'));
const DatePickerField = (props) => (React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
    React.createElement(DatePicker, { ...props })));
export default DatePickerField;
