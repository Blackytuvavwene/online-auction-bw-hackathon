import { SanitizedCollectionConfig } from '../../../collections/config/types';
import { SanitizedGlobalConfig } from '../../../globals/config/types';
import { PayloadRequest } from '../../../express/types';
declare type Args = {
    currentDepth?: number;
    depth: number;
    doc: Record<string, unknown>;
    entityConfig: SanitizedCollectionConfig | SanitizedGlobalConfig;
    findMany?: boolean;
    flattenLocales?: boolean;
    req: PayloadRequest;
    overrideAccess: boolean;
    showHiddenFields: boolean;
};
export declare function afterRead<T = any>(args: Args): Promise<T>;
export {};
