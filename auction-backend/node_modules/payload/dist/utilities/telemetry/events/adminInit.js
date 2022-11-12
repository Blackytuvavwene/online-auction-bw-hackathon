"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminInit = void 0;
const __1 = require("..");
const oneWayHash_1 = require("../oneWayHash");
const adminInit = (req) => {
    const { user, payload } = req;
    const { host } = req.headers;
    let domainID;
    let userID;
    if (host) {
        domainID = (0, oneWayHash_1.oneWayHash)(host, payload.secret);
    }
    if (user && typeof (user === null || user === void 0 ? void 0 : user.id) === 'string') {
        userID = (0, oneWayHash_1.oneWayHash)(user.id, payload.secret);
    }
    (0, __1.sendEvent)({
        payload,
        event: {
            type: 'admin-init',
            domainID,
            userID,
        },
    });
};
exports.adminInit = adminInit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5Jbml0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3V0aWxpdGllcy90ZWxlbWV0cnkvZXZlbnRzL2FkbWluSW5pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwQkFBK0I7QUFDL0IsOENBQTJDO0FBUXBDLE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBbUIsRUFBUSxFQUFFO0lBQ3JELE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBQzlCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBRTdCLElBQUksUUFBZ0IsQ0FBQztJQUNyQixJQUFJLE1BQWMsQ0FBQztJQUVuQixJQUFJLElBQUksRUFBRTtRQUNSLFFBQVEsR0FBRyxJQUFBLHVCQUFVLEVBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM3QztJQUVELElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsRUFBRSxDQUFBLEtBQUssUUFBUSxFQUFFO1FBQ3hDLE1BQU0sR0FBRyxJQUFBLHVCQUFVLEVBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUM7SUFFRCxJQUFBLGFBQVMsRUFBQztRQUNSLE9BQU87UUFDUCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsWUFBWTtZQUNsQixRQUFRO1lBQ1IsTUFBTTtTQUNQO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBdkJXLFFBQUEsU0FBUyxhQXVCcEIifQ==