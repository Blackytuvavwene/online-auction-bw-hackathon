import { Payload } from '../../index';
import { ServerInitEvent } from './events/serverInit';
import { AdminInitEvent } from './events/adminInit';
export declare type BaseEvent = {
    envID: string;
    projectID: string;
    nodeVersion: string;
    nodeEnv: string;
    payloadVersion: string;
};
declare type PackageJSON = {
    name: string;
    dependencies: Record<string, string | undefined>;
};
declare type TelemetryEvent = ServerInitEvent | AdminInitEvent;
declare type Args = {
    payload: Payload;
    event: TelemetryEvent;
};
export declare const sendEvent: ({ payload, event }: Args) => Promise<void>;
export declare const getPayloadVersion: (packageJSON: PackageJSON) => string;
export {};
