"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverInit = void 0;
const __1 = require("..");
const serverInit = (payload) => {
    (0, __1.sendEvent)({
        payload,
        event: {
            type: 'server-init',
        },
    });
};
exports.serverInit = serverInit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVySW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGVsZW1ldHJ5L2V2ZW50cy9zZXJ2ZXJJbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUErQjtBQU94QixNQUFNLFVBQVUsR0FBRyxDQUFDLE9BQWdCLEVBQVEsRUFBRTtJQUNuRCxJQUFBLGFBQVMsRUFBQztRQUNSLE9BQU87UUFDUCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsYUFBYTtTQUNwQjtLQUNGLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVBXLFFBQUEsVUFBVSxjQU9yQiJ9