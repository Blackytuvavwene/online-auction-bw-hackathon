"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adminInit_1 = require("../../utilities/telemetry/events/adminInit");
const types_1 = require("../../fields/config/types");
const allOperations = ['create', 'read', 'update', 'delete'];
async function accessOperation(args) {
    const { req, req: { user, payload: { config, }, }, } = args;
    (0, adminInit_1.adminInit)(req);
    const results = {};
    const promises = [];
    const isLoggedIn = !!(user);
    const userCollectionConfig = (user && user.collection) ? config.collections.find((collection) => collection.slug === user.collection) : null;
    const createAccessPromise = async (obj, access, operation, disableWhere = false) => {
        var _a;
        const updatedObj = obj;
        const result = await access({ req });
        if (typeof result === 'object' && !disableWhere) {
            updatedObj[operation] = {
                permission: true,
                where: result,
            };
        }
        else if (((_a = updatedObj[operation]) === null || _a === void 0 ? void 0 : _a.permission) !== false) {
            updatedObj[operation] = {
                permission: !!(result),
            };
        }
    };
    const executeFieldPolicies = (obj, fields, operation) => {
        const updatedObj = obj;
        fields.forEach(async (field) => {
            if (field.name) {
                if (!updatedObj[field.name])
                    updatedObj[field.name] = {};
                if (field.access && typeof field.access[operation] === 'function') {
                    promises.push(createAccessPromise(updatedObj[field.name], field.access[operation], operation, true));
                }
                else {
                    updatedObj[field.name][operation] = {
                        permission: isLoggedIn,
                    };
                }
                if (field.fields) {
                    if (!updatedObj[field.name].fields)
                        updatedObj[field.name].fields = {};
                    executeFieldPolicies(updatedObj[field.name].fields, field.fields, operation);
                }
            }
            else if (field.fields) {
                executeFieldPolicies(updatedObj, field.fields, operation);
            }
            else if (field.type === 'tabs') {
                field.tabs.forEach((tab) => {
                    if ((0, types_1.tabHasName)(tab)) {
                        if (!updatedObj[tab.name])
                            updatedObj[tab.name] = { fields: {} };
                        executeFieldPolicies(updatedObj[tab.name].fields, tab.fields, operation);
                    }
                    else {
                        executeFieldPolicies(updatedObj, tab.fields, operation);
                    }
                });
            }
        });
    };
    const executeEntityPolicies = async (entity, operations, type) => {
        if (!results[type])
            results[type] = {};
        results[type][entity.slug] = {
            fields: {},
        };
        operations.forEach((operation) => {
            executeFieldPolicies(results[type][entity.slug].fields, entity.fields, operation);
            if (typeof entity.access[operation] === 'function') {
                promises.push(createAccessPromise(results[type][entity.slug], entity.access[operation], operation));
            }
            else {
                results[type][entity.slug][operation] = {
                    permission: isLoggedIn,
                };
            }
        });
    };
    if (userCollectionConfig) {
        results.canAccessAdmin = userCollectionConfig.access.admin ? await userCollectionConfig.access.admin(args) : isLoggedIn;
    }
    else {
        results.canAccessAdmin = false;
    }
    config.collections.forEach((collection) => {
        const collectionOperations = [...allOperations];
        if (collection.auth && (typeof collection.auth.maxLoginAttempts !== 'undefined' && collection.auth.maxLoginAttempts !== 0)) {
            collectionOperations.push('unlock');
        }
        if (collection.versions) {
            collectionOperations.push('readVersions');
        }
        executeEntityPolicies(collection, collectionOperations, 'collections');
    });
    config.globals.forEach((global) => {
        const globalOperations = ['read', 'update'];
        if (global.versions) {
            globalOperations.push('readVersions');
        }
        executeEntityPolicies(global, globalOperations, 'globals');
    });
    await Promise.all(promises);
    return results;
}
exports.default = accessOperation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvb3BlcmF0aW9ucy9hY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwwRUFBNkY7QUFDN0YscURBQXVEO0FBRXZELE1BQU0sYUFBYSxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFNN0QsS0FBSyxVQUFVLGVBQWUsQ0FBQyxJQUFlO0lBQzVDLE1BQU0sRUFDSixHQUFHLEVBQ0gsR0FBRyxFQUFFLEVBQ0gsSUFBSSxFQUNKLE9BQU8sRUFBRSxFQUNQLE1BQU0sR0FDUCxHQUNGLEdBQ0YsR0FBRyxJQUFJLENBQUM7SUFFVCxJQUFBLHFCQUFrQixFQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXhCLE1BQU0sT0FBTyxHQUFHLEVBQWlCLENBQUM7SUFDbEMsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBRXBCLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUU3SSxNQUFNLG1CQUFtQixHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZLEdBQUcsS0FBSyxFQUFFLEVBQUU7O1FBQ2pGLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUN2QixNQUFNLE1BQU0sR0FBRyxNQUFNLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFckMsSUFBSSxPQUFPLE1BQU0s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