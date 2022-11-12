import { Response, NextFunction } from 'express';
import { PayloadRequest } from '../../express/types';
import { SanitizedGlobalConfig } from '../config/types';
import { Document } from '../../types';
export declare type FindOneGlobalResult = Promise<Response<Document> | void>;
export declare type FindOneGlobalResponse = (req: PayloadRequest, res: Response, next: NextFunction) => FindOneGlobalResult;
export default function findOneHandler(globalConfig: SanitizedGlobalConfig): FindOneGlobalResponse;
