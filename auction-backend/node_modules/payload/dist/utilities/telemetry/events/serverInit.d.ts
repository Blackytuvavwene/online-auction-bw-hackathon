import { Payload } from '../../..';
export declare type ServerInitEvent = {
    type: 'server-init';
};
export declare const serverInit: (payload: Payload) => void;
