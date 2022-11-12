import { PayloadRequest } from '../../../express/types';
import { Result } from '../forgotPassword';
import { Payload } from '../../..';
export declare type Options = {
    collection: string;
    data: {
        email: string;
    };
    expiration?: number;
    disableEmail?: boolean;
    req?: PayloadRequest;
};
declare function localForgotPassword(payload: Payload, options: Options): Promise<Result>;
export default localForgotPassword;
