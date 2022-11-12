"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const update_1 = __importDefault(require("../operations/update"));
function updateHandler(globalConfig) {
    return async function handler(req, res, next) {
        try {
            const { slug } = globalConfig;
            const draft = req.query.draft === 'true';
            const autosave = req.query.autosave === 'true';
            const result = await (0, update_1.default)({
                req,
                globalConfig,
                slug,
                depth: Number(req.query.depth),
                data: req.body,
                draft,
                autosave,
            });
            let message = 'Saved successfully.';
            if (draft)
                message = 'Draft saved successfully.';
            if (autosave)
                message = 'Autosaved successfully.';
            return res.status(http_status_1.default.OK).json({ message, result });
        }
        catch (error) {
            return next(error);
        }
    };
}
exports.default = updateHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dsb2JhbHMvcmVxdWVzdEhhbmRsZXJzL3VwZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDhEQUFxQztBQUlyQyxrRUFBMEM7QUFLMUMsU0FBd0IsYUFBYSxDQUFDLFlBQW1DO0lBQ3ZFLE9BQU8sS0FBSyxVQUFVLE9BQU8sQ0FBQyxHQUFtQixFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUNsRixJQUFJO1lBQ0YsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLFlBQVksQ0FBQztZQUM5QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUM7WUFDekMsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDO1lBRS9DLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBQSxnQkFBTSxFQUFDO2dCQUMxQixHQUFHO2dCQUNILFlBQVk7Z0JBQ1osSUFBSTtnQkFDSixLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUM5QixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7Z0JBQ2QsS0FBSztnQkFDTCxRQUFRO2FBQ1QsQ0FBQyxDQUFDO1lBRUgsSUFBSSxPQUFPLEdBQUcscUJBQXFCLENBQUM7WUFFcEMsSUFBSSxLQUFLO2dCQUFFLE9BQU8sR0FBRywyQkFBMkIsQ0FBQztZQUNqRCxJQUFJLFFBQVE7Z0JBQUUsT0FBTyxHQUFHLHlCQUF5QixDQUFDO1lBRWxELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUMsQ0FBQztBQUNKLENBQUM7QUEzQkQsZ0NBMkJDIn0=