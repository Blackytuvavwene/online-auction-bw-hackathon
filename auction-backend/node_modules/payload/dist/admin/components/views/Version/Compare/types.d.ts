import { SanitizedCollectionConfig } from '../../../../../collections/config/types';
import { PaginatedDocs } from '../../../../../mongoose/types';
import { CompareOption } from '../types';
export declare type Props = {
    onChange: (val: CompareOption) => void;
    value: CompareOption;
    baseURL: string;
    publishedDoc: any;
    versionID: string;
    parentID?: string;
};
declare type CLEAR = {
    type: 'CLEAR';
    required: boolean;
};
declare type ADD = {
    type: 'ADD';
    data: PaginatedDocs<any>;
    collection: SanitizedCollectionConfig;
};
export declare type Action = CLEAR | ADD;
export declare type ValueWithRelation = {
    relationTo: string;
    value: string;
};
export {};
