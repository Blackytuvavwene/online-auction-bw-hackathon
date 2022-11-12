import { PayloadRequest } from '../../express/types';
import { Collection } from '../config/types';
import { Document } from '../../types';
export declare type Arguments = {
    depth?: number;
    collection: Collection;
    id: string;
    req: PayloadRequest;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
};
declare function deleteOperation(incomingArgs: Arguments): Promise<Document>;
export default deleteOperation;
