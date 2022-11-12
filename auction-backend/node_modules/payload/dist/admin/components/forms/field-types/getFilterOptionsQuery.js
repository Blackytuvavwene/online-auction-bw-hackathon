export const getFilterOptionsQuery = (filterOptions, options) => {
    const { relationTo } = options;
    const relations = Array.isArray(relationTo) ? relationTo : [relationTo];
    const query = {};
    if (typeof filterOptions !== 'undefined') {
        relations.forEach((relation) => {
            query[relation] = typeof filterOptions === 'function' ? filterOptions(options) : filterOptions;
        });
    }
    return query;
};
