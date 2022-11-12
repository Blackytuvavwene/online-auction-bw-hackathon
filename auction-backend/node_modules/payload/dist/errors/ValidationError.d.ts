import APIError from './APIError';
declare class ValidationError extends APIError {
    constructor(results: {
        message: string;
        field: string;
    }[]);
}
export default ValidationError;
