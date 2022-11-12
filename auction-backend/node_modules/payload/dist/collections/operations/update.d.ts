import { Document } from '../../types';
import { Collection } from '../config/types';
import { PayloadRequest } from '../../express/types';
export declare type Arguments = {
    collection: Collection;
    req: PayloadRequest;
    id: string | number;
    data: Record<string, unknown>;
    depth?: number;
    disableVerificationEmail?: boolean;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    overwriteExistingFiles?: boolean;
    draft?: boolean;
    autosave?: boolean;
};
declare function update(incomingArgs: Arguments): Promise<Document>;
export default update;
