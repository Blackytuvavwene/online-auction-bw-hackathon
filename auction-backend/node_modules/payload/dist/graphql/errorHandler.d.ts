import { GraphQLFormattedError } from 'graphql';
/**
 *
 * @param info
 * @param debug
 * @param afterErrorHook
 * @returns {Promise<unknown[]>}
 */
declare const errorHandler: (info: any, debug: boolean, afterErrorHook: any) => Promise<GraphQLFormattedError[]>;
export default errorHandler;
