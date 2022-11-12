"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const internalFields = ['__v', 'salt', 'hash'];
const sanitizeInternalFields = (incomingDoc) => Object.entries(incomingDoc).reduce((newDoc, [key, val]) => {
    if (key === '_id') {
        return {
            ...newDoc,
            id: val,
        };
    }
    if (internalFields.indexOf(key) > -1) {
        return newDoc;
    }
    return {
        ...newDoc,
        [key]: val,
    };
}, {});
exports.default = sanitizeInternalFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemVJbnRlcm5hbEZpZWxkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQU0sY0FBYyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztBQUUvQyxNQUFNLHNCQUFzQixHQUFHLENBQTZCLFdBQVcsRUFBSyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUssRUFBRTtJQUMxSSxJQUFJLEdBQUcsS0FBSyxLQUFLLEVBQUU7UUFDakIsT0FBTztZQUNMLEdBQUcsTUFBTTtZQUNULEVBQUUsRUFBRSxHQUFHO1NBQ1IsQ0FBQztLQUNIO0lBRUQsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3BDLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFFRCxPQUFPO1FBQ0wsR0FBRyxNQUFNO1FBQ1QsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHO0tBQ1gsQ0FBQztBQUNKLENBQUMsRUFBRSxFQUFPLENBQUMsQ0FBQztBQUVaLGtCQUFlLHNCQUFzQixDQUFDIn0=