import React, { useCallback } from 'react';
import { useConfig } from '../../../utilities/Config';
import useField from '../../useField';
import withCondition from '../../withCondition';
import { upload } from '../../../../../fields/validations';
import UploadInput from './Input';
import './index.scss';
const Upload = (props) => {
    const { collections, serverURL, routes: { api, }, } = useConfig();
    const { path, name, required, admin: { readOnly, style, className, width, description, condition, } = {}, label, validate = upload, relationTo, fieldTypes, filterOptions, } = props;
    const collection = collections.find((coll) => coll.slug === relationTo);
    const memoizedValidate = useCallback((value, options) => {
        return validate(value, { ...options, required });
    }, [validate, required]);
    const field = useField({
        path,
        validate: memoizedValidate,
        condition,
    });
    const { value, showError, setValue, errorMessage, } = field;
    const onChange = useCallback((incomingValue) => {
        const incomingID = (incomingValue === null || incomingValue === void 0 ? void 0 : incomingValue.id) || incomingValue;
        setValue(incomingID);
    }, [
        setValue,
    ]);
    if (collection.upload) {
        return (React.createElement(UploadInput, { path: path, value: value, onChange: onChange, description: description, label: label, required: required, showError: showError, serverURL: serverURL, api: api, errorMessage: errorMessage, readOnly: readOnly, style: style, className: className, width: width, collection: collection, fieldTypes: fieldTypes, name: name, relationTo: relationTo, filterOptions: filterOptions }));
    }
    return null;
};
export default withCondition(Upload);
