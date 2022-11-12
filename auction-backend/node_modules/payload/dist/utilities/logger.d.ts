import pino from 'pino';
export declare type PayloadLogger = pino.Logger;
declare const _default: import("micro-memoize").MicroMemoize.Memoized<(name?: string, options?: pino.LoggerOptions) => pino.Logger>;
export default _default;
