import { Response } from 'express';
import { Collection } from '../../collections/config/types';
import { UserDocument } from '../types';
import { PayloadRequest } from '../../express/types';
export declare type Result = {
    token: string;
    user: UserDocument;
};
export declare type Arguments = {
    data: {
        token: string;
        password: string;
    };
    collection: Collection;
    req: PayloadRequest;
    overrideAccess?: boolean;
    res?: Response;
};
declare function resetPassword(args: Arguments): Promise<Result>;
export default resetPassword;
