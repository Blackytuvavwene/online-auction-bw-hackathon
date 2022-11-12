"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findVersions_1 = __importDefault(require("./requestHandlers/findVersions"));
const findVersionByID_1 = __importDefault(require("./requestHandlers/findVersionByID"));
const restoreVersion_1 = __importDefault(require("./requestHandlers/restoreVersion"));
const update_1 = __importDefault(require("./requestHandlers/update"));
const findOne_1 = __importDefault(require("./requestHandlers/findOne"));
const buildEndpoints = (global) => {
    const { endpoints } = global;
    if (global.versions) {
        endpoints.push(...[
            {
                path: '/versions',
                method: 'get',
                handler: (0, findVersions_1.default)(global),
            },
            {
                path: '/versions/:id',
                method: 'get',
                handler: (0, findVersionByID_1.default)(global),
            },
            {
                path: '/versions/:id',
                method: 'post',
                handler: (0, restoreVersion_1.default)(global),
            },
        ]);
    }
    endpoints.push(...[
        {
            path: '/',
            method: 'get',
            handler: (0, findOne_1.default)(global),
        },
        {
            path: '/',
            method: 'post',
            handler: (0, update_1.default)(global),
        },
    ]);
    return endpoints;
};
exports.default = buildEndpoints;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRFbmRwb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2xvYmFscy9idWlsZEVuZHBvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtGQUEwRDtBQUMxRCx3RkFBZ0U7QUFDaEUsc0ZBQThEO0FBRTlELHNFQUE4QztBQUM5Qyx3RUFBZ0Q7QUFFaEQsTUFBTSxjQUFjLEdBQUcsQ0FBQyxNQUE2QixFQUFjLEVBQUU7SUFDbkUsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUU3QixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFDbkIsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ2hCO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsSUFBQSxzQkFBWSxFQUFDLE1BQU0sQ0FBQzthQUM5QjtZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsSUFBQSx5QkFBZSxFQUFDLE1BQU0sQ0FBQzthQUNqQztZQUNEO2dCQUNFLElBQUksRUFBRSxlQUFlO2dCQUNyQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsSUFBQSx3QkFBYyxFQUFDLE1BQU0sQ0FBQzthQUNoQztTQUNGLENBQUMsQ0FBQztLQUNKO0lBRUQsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHO1FBQ2hCO1lBQ0UsSUFBSSxFQUFFLEdBQUc7WUFDVCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRSxJQUFBLGlCQUFPLEVBQUMsTUFBTSxDQUFDO1NBQ3pCO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsR0FBRztZQUNULE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFLElBQUEsZ0JBQU0sRUFBQyxNQUFNLENBQUM7U0FDeEI7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDLENBQUM7QUFFRixrQkFBZSxjQUFjLENBQUMifQ==