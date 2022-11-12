export const createRelationMap = ({ hasMany, relationTo, value, }) => {
    const hasMultipleRelations = Array.isArray(relationTo);
    let relationMap;
    if (Array.isArray(relationTo)) {
        relationMap = relationTo.reduce((map, current) => {
            return { ...map, [current]: [] };
        }, {});
    }
    else {
        relationMap = { [relationTo]: [] };
    }
    const add = (relation, id) => {
        if (((typeof id === 'string') || typeof id === 'number') && typeof relation === 'string') {
            relationMap[relation].push(id);
        }
    };
    if (hasMany && Array.isArray(value)) {
        value.forEach((val) => {
            if (hasMultipleRelations) {
                add(val.relationTo, val.value);
            }
            else {
                add(relationTo, val);
            }
        });
    }
    else if (hasMultipleRelations) {
        const valueWithRelation = value;
        add(valueWithRelation === null || valueWithRelation === void 0 ? void 0 : valueWithRelation.relationTo, valueWithRelation === null || valueWithRelation === void 0 ? void 0 : valueWithRelation.value);
    }
    else {
        add(relationTo, value);
    }
    return relationMap;
};
