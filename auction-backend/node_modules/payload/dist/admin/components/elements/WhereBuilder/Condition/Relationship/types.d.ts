import { RelationshipField } from '../../../../../../fields/config/types';
import { SanitizedCollectionConfig } from '../../../../../../collections/config/types';
import { PaginatedDocs } from '../../../../../../mongoose/types';
export declare type Props = {
    onChange: (val: unknown) => void;
    value: unknown;
} & RelationshipField;
export declare type Option = {
    label: string;
    value: string;
    relationTo?: string;
    options?: Option[];
};
declare type CLEAR = {
    type: 'CLEAR';
    required: boolean;
};
declare type ADD = {
    type: 'ADD';
    data: PaginatedDocs<any>;
    relation: string;
    hasMultipleRelations: boolean;
    collection: SanitizedCollectionConfig;
};
export declare type Action = CLEAR | ADD;
export declare type ValueWithRelation = {
    relationTo: string;
    value: string;
};
export declare type GetResults = (args: {
    lastFullyLoadedRelation?: number;
    lastLoadedPage?: number;
    search?: string;
}) => Promise<void>;
export {};
