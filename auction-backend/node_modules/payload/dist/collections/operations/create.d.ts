import { Collection } from '../config/types';
import { PayloadRequest } from '../../express/types';
import { Document } from '../../types';
export declare type Arguments = {
    collection: Collection;
    req: PayloadRequest;
    depth?: number;
    disableVerificationEmail?: boolean;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    data: Record<string, unknown>;
    overwriteExistingFiles?: boolean;
    draft?: boolean;
};
declare function create(incomingArgs: Arguments): Promise<Document>;
export default create;
