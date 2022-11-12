"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecatedUpdate = void 0;
const http_status_1 = __importDefault(require("http-status"));
const formatSuccess_1 = __importDefault(require("../../express/responses/formatSuccess"));
const update_1 = __importDefault(require("../operations/update"));
async function deprecatedUpdate(req, res, next) {
    req.payload.logger.warn('The PUT method is deprecated and will no longer be supported in a future release. Please use the PATCH method for update requests.');
    return updateHandler(req, res, next);
}
exports.deprecatedUpdate = deprecatedUpdate;
async function updateHandler(req, res, next) {
    try {
        const draft = req.query.draft === 'true';
        const autosave = req.query.autosave === 'true';
        const doc = await (0, update_1.default)({
            req,
            collection: req.collection,
            id: req.params.id,
            data: req.body,
            depth: parseInt(String(req.query.depth), 10),
            draft,
            autosave,
        });
        let message = 'Updated successfully.';
        if (draft)
            message = 'Draft saved successfully.';
        if (autosave)
            message = 'Autosaved successfully.';
        return res.status(http_status_1.default.OK).json({
            ...(0, formatSuccess_1.default)(message, 'message'),
            doc,
        });
    }
    catch (error) {
        return next(error);
    }
}
exports.default = updateHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbGxlY3Rpb25zL3JlcXVlc3RIYW5kbGVycy91cGRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsOERBQXFDO0FBRXJDLDBGQUEwRTtBQUMxRSxrRUFBMEM7QUFPbkMsS0FBSyxVQUFVLGdCQUFnQixDQUFDLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCO0lBQzNGLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvSUFBb0ksQ0FBQyxDQUFDO0lBRTlKLE9BQU8sYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUpELDRDQUlDO0FBRWMsS0FBSyxVQUFVLGFBQWEsQ0FBQyxHQUFtQixFQUFFLEdBQWEsRUFBRSxJQUFrQjtJQUNoRyxJQUFJO1FBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDO1FBQ3pDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQztRQUUvQyxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUEsZ0JBQU0sRUFBQztZQUN2QixHQUFHO1lBQ0gsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUMsS0FBSztZQUNMLFFBQVE7U0FDVCxDQUFDLENBQUM7UUFFSCxJQUFJLE9BQU8sR0FBRyx1QkFBdUIsQ0FBQztRQUV0QyxJQUFJLEtBQUs7WUFBRSxPQUFPLEdBQUcsMkJBQTJCLENBQUM7UUFDakQsSUFBSSxRQUFRO1lBQUUsT0FBTyxHQUFHLHlCQUF5QixDQUFDO1FBRWxELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNwQyxHQUFHLElBQUEsdUJBQXFCLEVBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztZQUM1QyxHQUFHO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQztBQTNCRCxnQ0EyQkMifQ==