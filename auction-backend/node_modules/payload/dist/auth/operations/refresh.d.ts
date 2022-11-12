import { Response } from 'express';
import { Collection } from '../../collections/config/types';
import { Document } from '../../types';
import { PayloadRequest } from '../../express/types';
export declare type Result = {
    exp: number;
    user: Document;
    refreshedToken: string;
};
export declare type Arguments = {
    collection: Collection;
    token: string;
    req: PayloadRequest;
    res?: Response;
};
declare function refresh(incomingArgs: Arguments): Promise<Result>;
export default refresh;
