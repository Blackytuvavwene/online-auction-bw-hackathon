import React from 'react';
import { TypeWithID } from '../../../../../../collections/config/types';
export declare type Documents = {
    [slug: string]: {
        [id: string | number]: TypeWithID | null | false;
    };
};
declare type ListRelationshipContext = {
    getRelationships: (docs: {
        relationTo: string;
        value: number | string;
    }[]) => void;
    documents: Documents;
};
export declare const RelationshipProvider: React.FC<{
    children?: React.ReactNode;
}>;
export declare const useListRelationships: () => ListRelationshipContext;
export {};
