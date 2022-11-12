import { SanitizedCollectionConfig } from '../../../collections/config/types';
import { SanitizedGlobalConfig } from '../../../globals/config/types';
import { Operation } from '../../../types';
import { PayloadRequest } from '../../../express/types';
declare type Args = {
    data: Record<string, unknown>;
    doc: Record<string, unknown>;
    docWithLocales: Record<string, unknown>;
    entityConfig: SanitizedCollectionConfig | SanitizedGlobalConfig;
    id?: string | number;
    operation: Operation;
    req: PayloadRequest;
    skipValidation?: boolean;
};
export declare const beforeChange: ({ data: incomingData, doc, docWithLocales, entityConfig, id, operation, req, skipValidation, }: Args) => Promise<Record<string, unknown>>;
export {};
