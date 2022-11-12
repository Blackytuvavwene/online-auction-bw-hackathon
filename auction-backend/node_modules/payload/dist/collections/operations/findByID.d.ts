import { PayloadRequest } from '../../express/types';
import { Collection, TypeWithID } from '../config/types';
export declare type Arguments = {
    collection: Collection;
    id: string;
    req: PayloadRequest;
    disableErrors?: boolean;
    currentDepth?: number;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    depth?: number;
    draft?: boolean;
};
declare function findByID<T extends TypeWithID = any>(incomingArgs: Arguments): Promise<T>;
export default findByID;
