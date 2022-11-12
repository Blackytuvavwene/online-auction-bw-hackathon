import { ConnectOptions } from 'mongoose';
import pino from 'pino';
declare const connectMongoose: (url: string, options: ConnectOptions, logger: pino.Logger) => Promise<void | any>;
export default connectMongoose;
