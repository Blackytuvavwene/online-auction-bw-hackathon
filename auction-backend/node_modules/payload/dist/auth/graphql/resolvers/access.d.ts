import { Payload } from '../../..';
declare function accessResolver(payload: Payload): (_: any, args: any, context: any) => Promise<import("../..").Permissions>;
export default accessResolver;
