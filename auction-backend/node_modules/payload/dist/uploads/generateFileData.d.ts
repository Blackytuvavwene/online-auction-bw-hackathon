import { Collection } from '../collections/config/types';
import { SanitizedConfig } from '../config/types';
import { PayloadRequest } from '../express/types';
import { FileToSave } from './types';
declare type Args = {
    config: SanitizedConfig;
    collection: Collection;
    throwOnMissingFile?: boolean;
    req: PayloadRequest;
    data: Record<string, unknown>;
    overwriteExistingFiles?: boolean;
};
declare type Result = Promise<{
    data: Record<string, unknown>;
    files: FileToSave[];
}>;
export declare const generateFileData: ({ config, collection: { config: collectionConfig, Model, }, req, data, throwOnMissingFile, overwriteExistingFiles, }: Args) => Result;
export {};
