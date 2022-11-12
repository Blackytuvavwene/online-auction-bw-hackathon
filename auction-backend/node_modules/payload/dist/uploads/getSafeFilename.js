"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sanitize_filename_1 = __importDefault(require("sanitize-filename"));
const docWithFilenameExists_1 = __importDefault(require("./docWithFilenameExists"));
const fileExists_1 = __importDefault(require("./fileExists"));
const incrementName = (name) => {
    const extension = name.split('.').pop();
    const baseFilename = (0, sanitize_filename_1.default)(name.substring(0, name.lastIndexOf('.')) || name);
    let incrementedName = baseFilename;
    const regex = /(.*)-(\d)$/;
    const found = baseFilename.match(regex);
    if (found === null) {
        incrementedName += '-1';
    }
    else {
        const matchedName = found[1];
        const matchedNumber = found[2];
        const incremented = Number(matchedNumber) + 1;
        incrementedName = `${matchedName}-${incremented}`;
    }
    return `${incrementedName}.${extension}`;
};
async function getSafeFileName(Model, staticPath, desiredFilename) {
    let modifiedFilename = desiredFilename;
    // eslint-disable-next-line no-await-in-loop
    while (await (0, docWithFilenameExists_1.default)(Model, staticPath, modifiedFilename) || await (0, fileExists_1.default)(`${staticPath}/${modifiedFilename}`)) {
        modifiedFilename = incrementName(modifiedFilename);
    }
    return modifiedFilename;
}
exports.default = getSafeFileName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2FmZUZpbGVuYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VwbG9hZHMvZ2V0U2FmZUZpbGVuYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMEVBQXlDO0FBRXpDLG9GQUE0RDtBQUM1RCw4REFBc0M7QUFFdEMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUNyQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sWUFBWSxHQUFHLElBQUEsMkJBQVEsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7SUFDaEYsSUFBSSxlQUFlLEdBQUcsWUFBWSxDQUFDO0lBQ25DLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQztJQUMzQixNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtRQUNsQixlQUFlLElBQUksSUFBSSxDQUFDO0tBQ3pCO1NBQU07UUFDTCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsZUFBZSxHQUFHLEdBQUcsV0FBVyxJQUFJLFdBQVcsRUFBRSxDQUFDO0tBQ25EO0lBQ0QsT0FBTyxHQUFHLGVBQWUsSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUMzQyxDQUFDLENBQUM7QUFFRixLQUFLLFVBQVUsZUFBZSxDQUFDLEtBQXNCLEVBQUUsVUFBa0IsRUFBRSxlQUF1QjtJQUNoRyxJQUFJLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztJQUV2Qyw0Q0FBNEM7SUFDNUMsT0FBTyxNQUFNLElBQUEsK0JBQXFCLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLE1BQU0sSUFBQSxvQkFBVSxFQUFDLEdBQUcsVUFBVSxJQUFJLGdCQUFnQixFQUFFLENBQUMsRUFBRTtRQUNoSSxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUNwRDtJQUNELE9BQU8sZ0JBQWdCLENBQUM7QUFDMUIsQ0FBQztBQUVELGtCQUFlLGVBQWUsQ0FBQyJ9