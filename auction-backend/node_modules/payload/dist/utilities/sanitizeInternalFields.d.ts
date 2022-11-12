import { TypeWithID } from '../collections/config/types';
declare const sanitizeInternalFields: <T extends TypeWithID = any>(incomingDoc: any) => T;
export default sanitizeInternalFields;
