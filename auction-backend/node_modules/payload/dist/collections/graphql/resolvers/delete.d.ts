import { Response } from 'express';
import { PayloadRequest } from '../../../express/types';
import { Collection } from '../../config/types';
export declare type Resolver = (_: unknown, args: {
    locale?: string;
    fallbackLocale?: string;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<Document>;
export default function getDeleteResolver(collection: Collection): Resolver;
