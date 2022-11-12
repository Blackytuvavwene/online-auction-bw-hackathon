import { Logger } from 'pino';
import { SanitizedConfig } from './types';
declare const validateSchema: (config: SanitizedConfig, logger: Logger) => SanitizedConfig;
export default validateSchema;
