"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
exports.default = (config) => {
    const defaultMethods = ['jwt', 'anonymous'];
    const methods = config.collections.reduce((enabledMethods, collection) => {
        if (typeof collection.auth === 'object') {
            const collectionMethods = [...enabledMethods];
            if (Array.isArray(collection.auth.strategies)) {
                collection.auth.strategies.forEach(({ name, strategy }) => {
                    collectionMethods.unshift(`${collection.slug}-${name !== null && name !== void 0 ? name : strategy.name}`);
                });
            }
            if (collection.auth.useAPIKey) {
                collectionMethods.unshift(`${collection.slug}-api-key`);
            }
            return collectionMethods;
        }
        return enabledMethods;
    }, defaultMethods);
    const authenticate = passport_1.default.authenticate(methods, { session: false });
    return authenticate;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2V4cHJlc3MvbWlkZGxld2FyZS9hdXRoZW50aWNhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFNaEMsa0JBQWUsQ0FBQyxNQUF1QixFQUF1QixFQUFFO0lBQzlELE1BQU0sY0FBYyxHQUFHLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBRTVDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxFQUFFO1FBQ3ZFLElBQUksT0FBTyxVQUFVLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN2QyxNQUFNLGlCQUFpQixHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQztZQUU5QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDN0MsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtvQkFDeEQsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLGFBQUosSUFBSSxjQUFKLElBQUksR0FBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDM0UsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUVELElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQzdCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDO2FBQ3pEO1lBRUQsT0FBTyxpQkFBaUIsQ0FBQztTQUMxQjtRQUVELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUVuQixNQUFNLFlBQVksR0FBRyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN4RSxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDLENBQUMifQ==