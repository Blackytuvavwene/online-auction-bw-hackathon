import { NextFunction, Response } from 'express';
import { PayloadRequest } from '../../express/types';
export declare type UpdatePreferenceResult = Promise<Response<Document> | void>;
export declare type UpdatePreferenceResponse = (req: PayloadRequest, res: Response, next: NextFunction) => UpdatePreferenceResult;
export default function updateHandler(req: PayloadRequest, res: Response, next: NextFunction): Promise<Response<any> | void>;
