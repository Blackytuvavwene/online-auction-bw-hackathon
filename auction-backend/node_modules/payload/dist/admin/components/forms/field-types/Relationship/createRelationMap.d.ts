declare type RelationMap = {
    [relation: string]: unknown[];
};
declare type CreateRelationMap = (args: {
    hasMany: boolean;
    relationTo: string | string[];
    value: unknown;
}) => RelationMap;
export declare const createRelationMap: CreateRelationMap;
export {};
