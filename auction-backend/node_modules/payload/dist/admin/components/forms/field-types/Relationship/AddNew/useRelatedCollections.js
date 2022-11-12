import { useState } from 'react';
import { useConfig } from '../../../../utilities/Config';
export const useRelatedCollections = (relationTo) => {
    const config = useConfig();
    const [relatedCollections] = useState(() => {
        const relations = typeof relationTo === 'string' ? [relationTo] : relationTo;
        return relations.map((relation) => config.collections.find((collection) => collection.slug === relation));
    });
    return relatedCollections;
};
