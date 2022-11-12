import { User } from '../../../../../auth';
import { NonPresentationalField } from '../../../../../fields/config/types';
import { Fields, Data } from '../types';
declare type Args = {
    field: NonPresentationalField;
    locale: string;
    user: User;
    state: Fields;
    path: string;
    passesCondition: boolean;
    fieldPromises: Promise<void>[];
    id: string | number;
    operation: 'create' | 'update';
    data: Data;
    fullData: Data;
};
export declare const addFieldStatePromise: ({ field, locale, user, state, path, passesCondition, fullData, data, fieldPromises, id, operation, }: Args) => Promise<void>;
export {};
