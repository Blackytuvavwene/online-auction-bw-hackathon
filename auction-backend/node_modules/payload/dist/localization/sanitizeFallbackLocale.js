"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sanitizeFallbackLocale = (fallbackLocale) => {
    if (fallbackLocale === 'null' || fallbackLocale === 'none' || fallbackLocale === 'false' || fallbackLocale === false || fallbackLocale === null) {
        return null;
    }
    return fallbackLocale;
};
exports.default = sanitizeFallbackLocale;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemVGYWxsYmFja0xvY2FsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vc2FuaXRpemVGYWxsYmFja0xvY2FsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRTtJQUNoRCxJQUFJLGNBQWMsS0FBSyxNQUFNLElBQUksY0FBYyxLQUFLLE1BQU0sSUFBSSxjQUFjLEtBQUssT0FBTyxJQUFJLGNBQWMsS0FBSyxLQUFLLElBQUksY0FBYyxLQUFLLElBQUksRUFBRTtRQUMvSSxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsc0JBQXNCLENBQUMifQ==