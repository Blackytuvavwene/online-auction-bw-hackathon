import { Collection } from '../../../collections/config/types';
declare function loginResolver(collection: Collection): (_: any, args: any, context: any) => Promise<import("../../operations/login").Result & {
    user: unknown;
}>;
export default loginResolver;
