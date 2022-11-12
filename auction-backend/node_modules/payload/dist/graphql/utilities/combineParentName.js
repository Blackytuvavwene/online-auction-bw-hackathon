"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatName_1 = __importDefault(require("./formatName"));
const combineParentName = (parent, name) => (0, formatName_1.default)(`${parent ? `${parent}_` : ''}${name}`);
exports.default = combineParentName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZVBhcmVudE5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZ3JhcGhxbC91dGlsaXRpZXMvY29tYmluZVBhcmVudE5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4REFBc0M7QUFFdEMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLE1BQWMsRUFBRSxJQUFZLEVBQVUsRUFBRSxDQUFDLElBQUEsb0JBQVUsRUFBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7QUFFdkgsa0JBQWUsaUJBQWlCLENBQUMifQ==