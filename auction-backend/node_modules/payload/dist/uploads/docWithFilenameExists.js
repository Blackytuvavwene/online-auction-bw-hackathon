"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const docWithFilenameExists = async (Model, path, filename) => {
    const doc = await Model.findOne({ filename });
    if (doc)
        return true;
    return false;
};
exports.default = docWithFilenameExists;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jV2l0aEZpbGVuYW1lRXhpc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VwbG9hZHMvZG9jV2l0aEZpbGVuYW1lRXhpc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBTSxxQkFBcUIsR0FBRyxLQUFLLEVBQUUsS0FBc0IsRUFBRSxJQUFZLEVBQUUsUUFBZ0IsRUFBb0IsRUFBRTtJQUMvRyxNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLElBQUksR0FBRztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRXJCLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsa0JBQWUscUJBQXFCLENBQUMifQ==