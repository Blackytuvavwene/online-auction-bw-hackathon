"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const util_1 = require("util");
const stat = (0, util_1.promisify)(fs_1.default.stat);
const fileExists = async (filename) => {
    try {
        await stat(filename);
        return true;
    }
    catch (err) {
        return false;
    }
};
exports.default = fileExists;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZUV4aXN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2ZpbGVFeGlzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0Q0FBb0I7QUFDcEIsK0JBQWlDO0FBRWpDLE1BQU0sSUFBSSxHQUFHLElBQUEsZ0JBQVMsRUFBQyxZQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEMsTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUFFLFFBQWdCLEVBQW9CLEVBQUU7SUFDOUQsSUFBSTtRQUNGLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDLENBQUM7QUFFRixrQkFBZSxVQUFVLENBQUMifQ==