"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const executeAccess = async (operation, access) => {
    if (access) {
        const result = await access(operation);
        if (!result) {
            if (!operation.disableErrors)
                throw new errors_1.Forbidden();
        }
        return result;
    }
    if (operation.req.user) {
        return true;
    }
    if (!operation.disableErrors)
        throw new errors_1.Forbidden();
    return false;
};
exports.default = executeAccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZUFjY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL2V4ZWN1dGVBY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBTSxhQUFhLEdBQUcsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFjLEVBQXlCLEVBQUU7SUFDL0UsSUFBSSxNQUFNLEVBQUU7UUFDVixNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhO2dCQUFFLE1BQU0sSUFBSSxrQkFBUyxFQUFFLENBQUM7U0FDckQ7UUFFRCxPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtRQUN0QixPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhO1FBQUUsTUFBTSxJQUFJLGtCQUFTLEVBQUUsQ0FBQztJQUNwRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGLGtCQUFlLGFBQWEsQ0FBQyJ9