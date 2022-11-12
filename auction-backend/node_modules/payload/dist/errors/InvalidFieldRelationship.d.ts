import { Field } from '../fields/config/types';
import APIError from './APIError';
declare class InvalidFieldRelationship extends APIError {
    constructor(field: Field, relationship: string);
}
export default InvalidFieldRelationship;
