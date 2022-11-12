import { Response } from 'express';
import { PayloadRequest } from '../../express/types';
import { User } from '../types';
import { Collection } from '../../collections/config/types';
export declare type Result = {
    user?: User;
    token?: string;
    exp?: number;
};
export declare type Arguments = {
    collection: Collection;
    data: {
        email: string;
        password: string;
    };
    req: PayloadRequest;
    res?: Response;
    depth?: number;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
};
declare function login<T>(incomingArgs: Arguments): Promise<Result & {
    user: T;
}>;
export default login;
