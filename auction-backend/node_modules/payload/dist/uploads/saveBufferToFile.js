"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const fs_1 = __importDefault(require("fs"));
/**
 * Save buffer data to a file.
 * @param {Buffer} buffer - buffer to save to a file.
 * @param {string} filePath - path to a file.
 */
const saveBufferToFile = async (buffer, filePath) => {
    // Setup readable stream from buffer.
    let streamData = buffer;
    const readStream = new stream_1.Readable();
    readStream._read = () => {
        readStream.push(streamData);
        streamData = null;
    };
    // Setup file system writable stream.
    return fs_1.default.writeFileSync(filePath, buffer);
};
exports.default = saveBufferToFile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUJ1ZmZlclRvRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL3NhdmVCdWZmZXJUb0ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBa0M7QUFDbEMsNENBQW9CO0FBRXBCOzs7O0dBSUc7QUFDSCxNQUFNLGdCQUFnQixHQUFHLEtBQUssRUFBRSxNQUFjLEVBQUUsUUFBZ0IsRUFBaUIsRUFBRTtJQUNqRixxQ0FBcUM7SUFDckMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLE1BQU0sVUFBVSxHQUFHLElBQUksaUJBQVEsRUFBRSxDQUFDO0lBQ2xDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFO1FBQ3RCLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsVUFBVSxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDLENBQUM7SUFDRixxQ0FBcUM7SUFDckMsT0FBTyxZQUFFLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUM7QUFFRixrQkFBZSxnQkFBZ0IsQ0FBQyJ9