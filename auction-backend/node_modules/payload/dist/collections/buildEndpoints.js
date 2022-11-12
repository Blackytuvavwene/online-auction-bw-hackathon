"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const find_1 = __importDefault(require("./requestHandlers/find"));
const verifyEmail_1 = __importDefault(require("../auth/requestHandlers/verifyEmail"));
const unlock_1 = __importDefault(require("../auth/requestHandlers/unlock"));
const create_1 = __importDefault(require("./requestHandlers/create"));
const init_1 = __importDefault(require("../auth/requestHandlers/init"));
const login_1 = __importDefault(require("../auth/requestHandlers/login"));
const refresh_1 = __importDefault(require("../auth/requestHandlers/refresh"));
const me_1 = __importDefault(require("../auth/requestHandlers/me"));
const registerFirstUser_1 = __importDefault(require("../auth/requestHandlers/registerFirstUser"));
const forgotPassword_1 = __importDefault(require("../auth/requestHandlers/forgotPassword"));
const resetPassword_1 = __importDefault(require("../auth/requestHandlers/resetPassword"));
const findVersions_1 = __importDefault(require("./requestHandlers/findVersions"));
const findVersionByID_1 = __importDefault(require("./requestHandlers/findVersionByID"));
const restoreVersion_1 = __importDefault(require("./requestHandlers/restoreVersion"));
const delete_1 = __importDefault(require("./requestHandlers/delete"));
const findByID_1 = __importDefault(require("./requestHandlers/findByID"));
const update_1 = __importStar(require("./requestHandlers/update"));
const logout_1 = __importDefault(require("../auth/requestHandlers/logout"));
const buildEndpoints = (collection) => {
    let { endpoints } = collection;
    if (collection.auth) {
        if (!collection.auth.disableLocalStrategy) {
            if (collection.auth.verify) {
                endpoints.push({
                    path: '/verify/:token',
                    method: 'post',
                    handler: verifyEmail_1.default,
                });
            }
            if (collection.auth.maxLoginAttempts > 0) {
                endpoints.push({
                    path: '/unlock',
                    method: 'post',
                    handler: unlock_1.default,
                });
            }
            endpoints = endpoints.concat([
                {
                    path: '/login',
                    method: 'post',
                    handler: login_1.default,
                },
                {
                    path: '/first-register',
                    method: 'post',
                    handler: registerFirstUser_1.default,
                },
                {
                    path: '/forgot-password',
                    method: 'post',
                    handler: forgotPassword_1.default,
                },
                {
                    path: '/reset-password',
                    method: 'post',
                    handler: resetPassword_1.default,
                },
            ]);
        }
        endpoints = endpoints.concat([
            {
                path: '/init',
                method: 'get',
                handler: init_1.default,
            },
            {
                path: '/me',
                method: 'get',
                handler: me_1.default,
            },
            {
                path: '/logout',
                method: 'post',
                handler: logout_1.default,
            },
            {
                path: '/refresh-token',
                method: 'post',
                handler: refresh_1.default,
            },
        ]);
    }
    if (collection.versions) {
        endpoints = endpoints.concat([
            {
                path: '/versions',
                method: 'get',
                handler: findVersions_1.default,
            },
            {
                path: '/versions/:id',
                method: 'get',
                handler: findVersionByID_1.default,
            },
            {
                path: '/versions/:id',
                method: 'post',
                handler: restoreVersion_1.default,
            },
        ]);
    }
    return endpoints.concat([
        {
            path: '/',
            method: 'get',
            handler: find_1.default,
        },
        {
            path: '/',
            method: 'post',
            handler: create_1.default,
        },
        {
            path: '/:id',
            method: 'put',
            handler: update_1.deprecatedUpdate,
        },
        {
            path: '/:id',
            method: 'patch',
            handler: update_1.default,
        },
        {
            path: '/:id',
            method: 'get',
            handler: findByID_1.default,
        },
        {
            path: '/:id',
            method: 'delete',
            handler: delete_1.default,
        },
    ]);
};
exports.default = buildEndpoints;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRFbmRwb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29sbGVjdGlvbnMvYnVpbGRFbmRwb2ludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGtFQUEwQztBQUMxQyxzRkFBOEQ7QUFDOUQsNEVBQW9EO0FBQ3BELHNFQUE4QztBQUM5Qyx3RUFBdUQ7QUFDdkQsMEVBQXlEO0FBQ3pELDhFQUE2RDtBQUM3RCxvRUFBbUQ7QUFDbkQsa0dBQWlGO0FBQ2pGLDRGQUEyRTtBQUMzRSwwRkFBa0U7QUFDbEUsa0ZBQTBEO0FBQzFELHdGQUFnRTtBQUNoRSxzRkFBOEQ7QUFDOUQsc0VBQXFEO0FBQ3JELDBFQUFrRDtBQUNsRCxtRUFBb0U7QUFDcEUsNEVBQTJEO0FBRTNELE1BQU0sY0FBYyxHQUFHLENBQUMsVUFBcUMsRUFBYyxFQUFFO0lBQzNFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxVQUFVLENBQUM7SUFFL0IsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzFCLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ2IsSUFBSSxFQUFFLGdCQUFnQjtvQkFDdEIsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLHFCQUFXO2lCQUNyQixDQUFDLENBQUM7YUFDSjtZQUVELElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hDLFNBQVMsQ0FBQyxJQUFJLENBQUM7b0JBQ2IsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLGdCQUFNO2lCQUNoQixDQUFDLENBQUM7YUFDSjtZQUVELFNBQVMsR0FBRyxTQUFTLENB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