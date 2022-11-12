import { Payload } from '../../../index';
export declare type Options = {
    token: string;
    collection: string;
};
declare function localVerifyEmail(payload: Payload, options: Options): Promise<boolean>;
export default localVerifyEmail;
