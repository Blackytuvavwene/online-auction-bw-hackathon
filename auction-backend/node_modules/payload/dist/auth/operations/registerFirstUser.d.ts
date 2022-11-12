import { Response } from 'express';
import { Document } from '../../types';
import { PayloadRequest } from '../../express/types';
import { Collection } from '../../collections/config/types';
export declare type Arguments = {
    collection: Collection;
    data: {
        email: string;
        password: string;
    };
    req: PayloadRequest;
    res: Response;
};
export declare type Result = {
    message: string;
    user: Document;
};
declare function registerFirstUser(args: Arguments): Promise<Result>;
export default registerFirstUser;
