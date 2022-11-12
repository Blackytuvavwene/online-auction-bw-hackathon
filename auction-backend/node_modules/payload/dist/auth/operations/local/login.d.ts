import { Response } from 'express';
import { Result } from '../login';
import { PayloadRequest } from '../../../express/types';
import { TypeWithID } from '../../../collections/config/types';
import { Payload } from '../../..';
export declare type Options = {
    collection: string;
    data: {
        email: string;
        password: string;
    };
    req?: PayloadRequest;
    res?: Response;
    depth?: number;
    locale?: string;
    fallbackLocale?: string;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
};
declare function localLogin<T extends TypeWithID = any>(payload: Payload, options: Options): Promise<Result & {
    user: T;
}>;
export default localLogin;
