import { Payload } from '../../..';
import { Result } from '../resetPassword';
import { PayloadRequest } from '../../../express/types';
export declare type Options = {
    collection: string;
    data: {
        token: string;
        password: string;
    };
    overrideAccess: boolean;
    req?: PayloadRequest;
};
declare function localResetPassword(payload: Payload, options: Options): Promise<Result>;
export default localResetPassword;
