"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const file_type_1 = require("file-type");
const path_1 = __importDefault(require("path"));
const getFileByPath = async (filePath) => {
    if (typeof filePath === 'string') {
        const data = fs_1.default.readFileSync(filePath);
        const mimetype = (0, file_type_1.fromFile)(filePath);
        const { size } = fs_1.default.statSync(filePath);
        const name = path_1.default.basename(filePath);
        return {
            data,
            mimetype: (await mimetype).mime,
            name,
            size,
        };
    }
    return undefined;
};
exports.default = getFileByPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RmlsZUJ5UGF0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL2dldEZpbGVCeVBhdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0Q0FBb0I7QUFDcEIseUNBQXFDO0FBQ3JDLGdEQUF3QjtBQUd4QixNQUFNLGFBQWEsR0FBRyxLQUFLLEVBQUUsUUFBZ0IsRUFBaUIsRUFBRTtJQUM5RCxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtRQUNoQyxNQUFNLElBQUksR0FBRyxZQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sUUFBUSxHQUFHLElBQUEsb0JBQVEsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsWUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV2QyxNQUFNLElBQUksR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLE9BQU87WUFDTCxJQUFJO1lBQ0osUUFBUSxFQUFFLENBQUMsTUFBTSxRQUFRLENBQUMsQ0FBQyxJQUFJO1lBQy9CLElBQUk7WUFDSixJQUFJO1NBQ0wsQ0FBQztLQUNIO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsYUFBYSxDQUFDIn0=