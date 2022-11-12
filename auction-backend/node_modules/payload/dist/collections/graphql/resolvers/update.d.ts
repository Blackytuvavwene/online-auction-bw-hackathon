import { Response } from 'express';
import { Collection } from '../../config/types';
import { PayloadRequest } from '../../../express/types';
export declare type Resolver = (_: unknown, args: {
    id: string | number;
    data: Record<string, unknown>;
    locale?: string;
    draft: boolean;
    autosave: boolean;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<Document>;
export default function updateResolver(collection: Collection): Resolver;
