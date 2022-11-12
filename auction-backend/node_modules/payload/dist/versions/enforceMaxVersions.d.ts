import { Payload } from '..';
import { CollectionModel } from '../collections/config/types';
declare type Args = {
    payload: Payload;
    Model: CollectionModel;
    max: number;
    entityLabel: string;
    entityType: 'global' | 'collection';
    id?: string | number;
};
export declare const enforceMaxVersions: ({ payload, Model, max, entityLabel, entityType, id, }: Args) => Promise<void>;
export {};
