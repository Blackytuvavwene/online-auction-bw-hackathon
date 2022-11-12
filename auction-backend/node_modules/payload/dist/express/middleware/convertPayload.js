"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, _, next) => {
    var _a, _b;
    if ((_a = req.body) === null || _a === void 0 ? void 0 : _a._payload) {
        const payloadJSON = JSON.parse(req.body._payload);
        req.body = {
            ...req.body,
            ...payloadJSON,
        };
        (_b = req.body) === null || _b === void 0 ? true : delete _b._payload;
    }
    next();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydFBheWxvYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXhwcmVzcy9taWRkbGV3YXJlL2NvbnZlcnRQYXlsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0JBQWUsQ0FBQyxHQUFZLEVBQUUsQ0FBVyxFQUFFLElBQWtCLEVBQVEsRUFBRTs7SUFDckUsSUFBSSxNQUFBLEdBQUcsQ0FBQyxJQUFJLDBDQUFFLFFBQVEsRUFBRTtRQUN0QixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEQsR0FBRyxDQUFDLElBQUksR0FBRztZQUNULEdBQUcsR0FBRyxDQUFDLElBQUk7WUFDWCxHQUFHLFdBQVc7U0FDZixDQUFDO1FBRUssTUFBQSxHQUFHLENBQUMsSUFBSSwrQ0FBRSxRQUFRLENBQUM7S0FDM0I7SUFFRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsQ0FBQyJ9