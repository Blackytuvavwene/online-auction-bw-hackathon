import { Document as MongooseDocument } from 'mongoose';
import { TypeWithTimestamps } from '../collections/config/types';
import { FileData } from '../uploads/types';
export { PayloadRequest } from '../express/types';
export declare type Operator = 'equals' | 'contains' | 'not_equals' | 'in' | 'not_in' | 'exists' | 'greater_than' | 'greater_than_equal' | 'less_than' | 'less_than_equal' | 'like' | 'near';
export declare type WhereField = {
    [key in Operator]?: unknown;
};
export declare type Where = {
    [key: string]: WhereField | Where[];
    or?: Where[];
    and?: Where[];
};
export declare type Document = any;
export interface PayloadMongooseDocument extends MongooseDocument {
    setLocale: (locale: string, fallback: string) => void;
    filename?: string;
    sizes?: FileData[];
}
export declare type Operation = 'create' | 'read' | 'update' | 'delete';
export declare function docHasTimestamps(doc: any): doc is TypeWithTimestamps;
