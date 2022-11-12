import { GraphQLFieldConfig, GraphQLObjectType } from 'graphql';
import { Field } from '../../fields/config/types';
import { Payload } from '../..';
export declare type ObjectTypeConfig = {
    [path: string]: GraphQLFieldConfig<any, any>;
};
declare type Args = {
    payload: Payload;
    name: string;
    parentName: string;
    fields: Field[];
    baseFields?: ObjectTypeConfig;
    forceNullable?: boolean;
};
declare function buildObjectType({ payload, name, fields, parentName, baseFields, forceNullable, }: Args): GraphQLObjectType;
export default buildObjectType;
