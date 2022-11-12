import { Express, Router } from 'express';
import pino from 'pino';
import { GraphQLError, GraphQLFormattedError, GraphQLSchema } from 'graphql';
import { TypeWithID, Collection, CollectionModel } from './collections/config/types';
import { SanitizedConfig, EmailOptions, InitOptions } from './config/types';
import { TypeWithVersion } from './versions/types';
import { PaginatedDocs } from './mongoose/types';
import { PayloadAuthenticate } from './express/middleware/authenticate';
import { Globals, TypeWithID as GlobalTypeWithID } from './globals/config/types';
import { ErrorHandler } from './express/middleware/errorHandler';
import { encrypt, decrypt } from './auth/crypto';
import { BuildEmailResult, Message } from './email/types';
import { Preferences } from './preferences/types';
import { Options as CreateOptions } from './collections/operations/local/create';
import { Options as FindOptions } from './collections/operations/local/find';
import { Options as FindByIDOptions } from './collections/operations/local/findByID';
import { Options as UpdateOptions } from './collections/operations/local/update';
import { Options as DeleteOptions } from './collections/operations/local/delete';
import { Options as FindVersionsOptions } from './collections/operations/local/findVersions';
import { Options as FindVersionByIDOptions } from './collections/operations/local/findVersionByID';
import { Options as RestoreVersionOptions } from './collections/operations/local/restoreVersion';
import { Options as FindGlobalVersionsOptions } from './globals/operations/local/findVersions';
import { Options as FindGlobalVersionByIDOptions } from './globals/operations/local/findVersionByID';
import { Options as RestoreGlobalVersionOptions } from './globals/operations/local/restoreVersion';
import { Options as ForgotPasswordOptions } from './auth/operations/local/forgotPassword';
import { Options as LoginOptions } from './auth/operations/local/login';
import { Options as ResetPasswordOptions } from './auth/operations/local/resetPassword';
import { Options as UnlockOptions } from './auth/operations/local/unlock';
import { Options as VerifyEmailOptions } from './auth/operations/local/verifyEmail';
import { Result as ForgotPasswordResult } from './auth/operations/forgotPassword';
import { Result as ResetPasswordResult } from './auth/operations/resetPassword';
import { Result as LoginResult } from './auth/operations/login';
import { Options as FindGlobalOptions } from './globals/operations/local/findOne';
import { Options as UpdateGlobalOptions } from './globals/operations/local/update';
/**
 * @description Payload
 */
export declare class Payload {
    config: SanitizedConfig;
    collections: {
        [slug: string]: Collection;
    };
    versions: {
        [slug: string]: CollectionModel;
    };
    preferences: Preferences;
    globals: Globals;
    logger: pino.Logger;
    express: Express;
    router: Router;
    emailOptions: EmailOptions;
    email: BuildEmailResult;
    sendEmail: (message: Message) => Promise<unknown>;
    secret: string;
    mongoURL: string | false;
    mongoMemoryServer: any;
    local: boolean;
    encrypt: typeof encrypt;
    decrypt: typeof decrypt;
    errorHandler: ErrorHandler;
    authenticate: PayloadAuthenticate;
    types: {
        blockTypes: any;
        blockInputTypes: any;
        localeInputType?: any;
        fallbackLocaleInputType?: any;
    };
    Query: {
        name: string;
        fields: {
            [key: string]: any;
        };
    };
    Mutation: {
        name: string;
        fields: {
            [key: string]: any;
        };
    };
    schema: GraphQLSchema;
    extensions: (info: any) => Promise<any>;
    customFormatErrorFn: (error: GraphQLError) => GraphQLFormattedError;
    validationRules: any;
    errorResponses: GraphQLFormattedError[];
    errorIndex: number;
    /**
     * @description Initializes Payload
     * @param options
     */
    init(options: InitOptions): void;
    initAsync(options: InitOptions): Promise<void>;
    getAdminURL: () => string;
    getAPIURL: () => string;
    /**
     * @description Performs create operation
     * @param options
     * @returns created document
     */
    create: <T = any>(options: CreateOptions<T>) => Promise<T>;
    /**
     * @description Find documents with criteria
     * @param options
     * @returns documents satisfying query
     */
    find: <T extends TypeWithID = any>(options: FindOptions) => Promise<PaginatedDocs<T>>;
    findGlobal: <T extends GlobalTypeWithID = any>(options: FindGlobalOptions) => Promise<T>;
    updateGlobal: <T extends GlobalTypeWithID = any>(options: UpdateGlobalOptions) => Promise<T>;
    /**
     * @description Find global versions with criteria
     * @param options
     * @returns versions satisfying query
     */
    findGlobalVersions: <T extends TypeWithVersion<T> = any>(options: FindGlobalVersionsOptions) => Promise<PaginatedDocs<T>>;
    /**
     * @description Find global version by ID
     * @param options
     * @returns global version with specified ID
     */
    findGlobalVersionByID: <T extends TypeWithVersion<T> = any>(options: FindGlobalVersionByIDOptions) => Promise<T>;
    /**
     * @description Restore global version by ID
     * @param options
     * @returns version with specified ID
     */
    restoreGlobalVersion: <T extends TypeWithVersion<T> = any>(options: RestoreGlobalVersionOptions) => Promise<T>;
    /**
     * @description Find document by ID
     * @param options
     * @returns document with specified ID
     */
    findByID: <T extends TypeWithID = any>(options: FindByIDOptions) => Promise<T>;
    /**
     * @description Update document
     * @param options
     * @returns Updated document
     */
    update: <T = any>(options: UpdateOptions<T>) => Promise<T>;
    delete: <T extends TypeWithID = any>(options: DeleteOptions) => Promise<T>;
    /**
     * @description Find versions with criteria
     * @param options
     * @returns versions satisfying query
     */
    findVersions: <T extends TypeWithVersion<T> = any>(options: FindVersionsOptions) => Promise<PaginatedDocs<T>>;
    /**
     * @description Find version by ID
     * @param options
     * @returns version with specified ID
     */
    findVersionByID: <T extends TypeWithVersion<T> = any>(options: FindVersionByIDOptions) => Promise<T>;
    /**
     * @description Restore version by ID
     * @param options
     * @returns version with specified ID
     */
    restoreVersion: <T extends TypeWithVersion<T> = any>(options: RestoreVersionOptions) => Promise<T>;
    login: <T extends TypeWithID = any>(options: LoginOptions) => Promise<LoginResult & {
        user: T;
    }>;
    forgotPassword: (options: ForgotPasswordOptions) => Promise<ForgotPasswordResult>;
    resetPassword: (options: ResetPasswordOptions) => Promise<ResetPasswordResult>;
    unlock: (options: UnlockOptions) => Promise<boolean>;
    verifyEmail: (options: VerifyEmailOptions) => Promise<boolean>;
}
declare const payload: Payload;
export default payload;
