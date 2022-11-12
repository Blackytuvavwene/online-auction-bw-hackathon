import { Field } from '../fields/config/types';
import APIError from './APIError';
declare class InvalidFieldName extends APIError {
    constructor(field: Field, fieldName: string);
}
export default InvalidFieldName;
