import { PayloadRequest } from '../../express/types';
import { User } from '../types';
import { Collection } from '../../collections/config/types';
export declare type Result = {
    user?: User;
    collection?: string;
    token?: string;
    exp?: number;
};
export declare type Arguments = {
    req: PayloadRequest;
    collection: Collection;
};
declare function me({ req, collection, }: Arguments): Promise<Result>;
export default me;
