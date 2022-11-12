import { Model } from 'mongoose';
import { User } from '../auth';
import { PayloadRequest } from '../express/types';
export declare type Preference = {
    user: string;
    userCollection: string;
    key: string;
    value: {
        [key: string]: unknown;
    } | unknown;
    createdAt?: Date;
    updatedAt?: Date;
};
export declare type Preferences = {
    Model: Model<Preference>;
};
export declare type PreferenceRequest = {
    overrideAccess?: boolean;
    req: PayloadRequest;
    user: User;
    key: string;
};
export declare type PreferenceUpdateRequest = PreferenceRequest & {
    value: undefined;
};
export declare type CollapsedPreferences = string[];
export declare type FieldsPreferences = {
    [key: string]: {
        collapsed: CollapsedPreferences;
    };
};
export declare type DocumentPreferences = {
    fields: FieldsPreferences;
};
