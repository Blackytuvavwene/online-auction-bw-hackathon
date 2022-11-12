import { Schema, SchemaOptions } from 'mongoose';
import { SanitizedConfig } from '../config/types';
import { Field } from '../fields/config/types';
export declare type BuildSchemaOptions = {
    options?: SchemaOptions;
    allowIDField?: boolean;
    disableUnique?: boolean;
    draftsEnabled?: boolean;
    global?: boolean;
    indexSortableFields?: boolean;
};
declare const buildSchema: (config: SanitizedConfig, configFields: Field[], buildSchemaOptions?: BuildSchemaOptions) => Schema;
export default buildSchema;
