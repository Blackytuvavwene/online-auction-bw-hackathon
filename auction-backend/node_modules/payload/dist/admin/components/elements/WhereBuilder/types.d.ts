import { SanitizedCollectionConfig } from '../../../../collections/config/types';
import { Field } from '../../../../fields/config/types';
import { Operator, Where } from '../../../../types';
export declare type Props = {
    collection: SanitizedCollectionConfig;
    handleChange?: (where: Where) => void;
    modifySearchQuery?: boolean;
};
export declare type FieldCondition = {
    label: string;
    value: string;
    operators: {
        label: string;
        value: Operator;
    }[];
    component?: string;
    props: Field;
};
export declare type Relation = 'and' | 'or';
export declare type ADD = {
    type: 'add';
    field: string;
    relation?: Relation;
    andIndex?: number;
    orIndex?: number;
};
export declare type REMOVE = {
    type: 'remove';
    andIndex: number;
    orIndex: number;
};
export declare type UPDATE = {
    type: 'update';
    andIndex: number;
    orIndex: number;
    operator?: string;
    field?: string;
    value?: unknown;
};
export declare type Action = ADD | REMOVE | UPDATE;
export declare type State = {
    or: Where[];
};
