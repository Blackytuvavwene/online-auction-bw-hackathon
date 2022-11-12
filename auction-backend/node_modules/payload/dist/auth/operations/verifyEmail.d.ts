import { Collection } from '../../collections/config/types';
export declare type Args = {
    token: string;
    collection: Collection;
};
declare function verifyEmail(args: Args): Promise<boolean>;
export default verifyEmail;
