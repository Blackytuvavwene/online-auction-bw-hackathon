import { Documents } from './index';
import { TypeWithID } from '../../../../../../collections/config/types';
declare type RequestDocuments = {
    type: 'REQUEST';
    docs: {
        relationTo: string;
        value: number | string;
    }[];
};
declare type AddLoadedDocuments = {
    type: 'ADD_LOADED';
    relationTo: string;
    docs: TypeWithID[];
    idsToLoad: (string | number)[];
};
declare type Action = RequestDocuments | AddLoadedDocuments;
export declare function reducer(state: Documents, action: Action): Documents;
export {};
