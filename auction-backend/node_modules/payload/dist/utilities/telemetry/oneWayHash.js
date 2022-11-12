"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneWayHash = void 0;
const crypto_1 = require("crypto");
const oneWayHash = (data, secret) => {
    const hash = (0, crypto_1.createHash)('sha256');
    // prepend value with payload secret. This ensure one-way.
    hash.update(secret);
    // Update is an append operation, not a replacement. The secret from the prior
    // update is still present!
    hash.update(data);
    return hash.digest('hex');
};
exports.oneWayHash = oneWayHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lV2F5SGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvdGVsZW1ldHJ5L29uZVdheUhhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWdEO0FBRXpDLE1BQU0sVUFBVSxHQUFHLENBQUMsSUFBZ0IsRUFBRSxNQUFjLEVBQVUsRUFBRTtJQUNyRSxNQUFNLElBQUksR0FBRyxJQUFBLG1CQUFVLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFFbEMsMERBQTBEO0lBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFcEIsOEVBQThFO0lBQzlFLDJCQUEyQjtJQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUM7QUFWVyxRQUFBLFVBQVUsY0FVckIifQ==