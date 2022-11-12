import { User } from '../../../../../auth';
import { Field as FieldSchema } from '../../../../../fields/config/types';
import { Fields, Data } from '../types';
declare type Args = {
    state: Fields;
    fields: FieldSchema[];
    data: Data;
    fullData: Data;
    parentPassesCondition: boolean;
    path: string;
    user: User;
    locale: string;
    fieldPromises: Promise<void>[];
    id: string | number;
    operation: 'create' | 'update';
};
export declare const iterateFields: ({ fields, data, parentPassesCondition, path, fullData, user, locale, operation, fieldPromises, id, state, }: Args) => void;
export {};
