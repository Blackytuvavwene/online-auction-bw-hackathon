import { Field } from '../fields/config/types';
import APIError from './APIError';
declare class MissingFieldInputOptions extends APIError {
    constructor(field: Field);
}
export default MissingFieldInputOptions;
