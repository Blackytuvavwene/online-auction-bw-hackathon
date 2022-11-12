import { PayloadRequest } from '../../../express/types';
import { SanitizedGlobalConfig } from '../../config/types';
declare type Resolver = (_: unknown, args: {
    locale?: string;
    fallbackLocale?: string;
    data?: Record<string, unknown>;
    draft?: boolean;
}, context: {
    req: PayloadRequest;
    res: Response;
}) => Promise<Document>;
export default function updateResolver(globalConfig: SanitizedGlobalConfig): Resolver;
export {};
