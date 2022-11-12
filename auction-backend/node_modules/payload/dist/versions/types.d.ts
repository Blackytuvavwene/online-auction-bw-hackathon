export declare type Autosave = {
    interval?: number;
};
export declare type IncomingDrafts = {
    autosave?: boolean | Autosave;
};
export declare type SanitizedDrafts = {
    autosave: false | Autosave;
};
export declare type IncomingCollectionVersions = {
    maxPerDoc?: number;
    retainDeleted?: boolean;
    drafts?: boolean | IncomingDrafts;
};
export interface SanitizedCollectionVersions extends Omit<IncomingCollectionVersions, 'drafts'> {
    maxPerDoc?: number;
    retainDeleted: boolean;
    drafts: SanitizedDrafts | false;
}
export declare type IncomingGlobalVersions = {
    max?: number;
    drafts?: boolean | IncomingDrafts;
};
export declare type SanitizedGlobalVersions = {
    max: number;
    drafts: SanitizedDrafts | false;
};
export declare type TypeWithVersion<T> = {
    id: string;
    parent: string | number;
    version: T;
    createdAt: string;
    updatedAt: string;
};
