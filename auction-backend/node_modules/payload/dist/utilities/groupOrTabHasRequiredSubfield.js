"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupOrTabHasRequiredSubfield = void 0;
const types_1 = require("../fields/config/types");
const groupOrTabHasRequiredSubfield = (entity) => {
    if ('type' in entity && entity.type === 'group') {
        return entity.fields.some((subField) => {
            return ((0, types_1.fieldAffectsData)(subField) && subField.required) || (0, exports.groupOrTabHasRequiredSubfield)(subField);
        });
    }
    if ('fields' in entity && 'name' in entity) {
        return entity.fields.some((subField) => (0, exports.groupOrTabHasRequiredSubfield)(subField));
    }
    return false;
};
exports.groupOrTabHasRequiredSubfield = groupOrTabHasRequiredSubfield;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXBPclRhYkhhc1JlcXVpcmVkU3ViZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbGl0aWVzL2dyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtEQUFzRTtBQUUvRCxNQUFNLDZCQUE2QixHQUFHLENBQUMsTUFBbUIsRUFBVyxFQUFFO0lBQzVFLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUMvQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDckMsT0FBTyxDQUFDLElBQUEsd0JBQWdCLEVBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUEscUNBQTZCLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEcsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUVELElBQUksUUFBUSxJQUFJLE1BQU0sSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO1FBQzFDLE9BQVEsTUFBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUEscUNBQTZCLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztLQUMzRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBWlcsUUFBQSw2QkFBNkIsaUNBWXhDIn0=