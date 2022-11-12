"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const executeAccess_1 = __importDefault(require("./executeAccess"));
const errors_1 = require("../errors");
const getExecuteStaticAccess = ({ config, Model }) => async (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    try {
        if (req.path) {
            const accessResult = await (0, executeAccess_1.default)({ req, isReadingStaticFile: true }, config.access.read);
            if (typeof accessResult === 'object') {
                const filename = decodeURI(req.path).replace(/^\/|\/$/g, '');
                const queryToBuild = {
                    where: {
                        and: [
                            {
                                or: [
                                    {
                                        filename: {
                                            equals: filename,
                                        },
                                    },
                                ],
                            },
                            accessResult,
                        ],
                    },
                };
                if (config.upload.imageSizes) {
                    config.upload.imageSizes.forEach(({ name }) => {
                        queryToBuild.where.and[0].or.push({
                            [`sizes.${name}.filename`]: {
                                equals: filename,
                            },
                        });
                    });
                }
                const query = await Model.buildQuery(queryToBuild, req.locale);
                const doc = await Model.findOne(query);
                if (!doc) {
                    throw new errors_1.Forbidden();
                }
            }
        }
        return next();
    }
    catch (error) {
        return next(error);
    }
};
exports.default = getExecuteStaticAccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RXhlY3V0ZVN0YXRpY0FjY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL2dldEV4ZWN1dGVTdGF0aWNBY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxvRUFBNEM7QUFDNUMsc0NBQXNDO0FBR3RDLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQW1CLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUNySCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1FBQzVCLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1QjtJQUVELElBQUk7UUFDRixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDWixNQUFNLFlBQVksR0FBRyxNQUFNLElBQUEsdUJBQWEsRUFBQyxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpHLElBQUksT0FBTyxZQUFZLEtBQUssUUFBUSxFQUFFO2dCQUNwQyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRTdELE1BQU0sWUFBWSxHQUFxQjtvQkFDckMsS0FBSyxFQUFFO3dCQUNMLEdBQUcsRUFBRTs0QkFDSDtnQ0FDRSxFQUFFLEVBQUU7b0NBQ0Y7d0NBQ0UsUUFBUSxFQUFFOzRDQUNSLE1BQU0sRUFBRSxRQUFRO3lDQUNqQjtxQ0FDRjtpQ0FDRjs2QkFDRjs0QkFDRCxZQUFZO3lCQUNiO3FCQUNGO2lCQUNGLENBQUM7Z0JBRUYsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtvQkFDNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO3dCQUM1QyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUNoQyxDQUFDLFNBQVMsSUFBSSxXQUFXLENBQUMsRUFBRTtnQ0FDMUIsTUFBTSxFQUFFLFFBQVE7NkJBQ2pCO3lCQUNGLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDSjtnQkFFRCxNQUFNLEtBQUssR0FBRyxNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0QsTUFBTSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUV2QyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNSLE1BQU0sSUFBSSxrQkFBUyxFQUFFLENBQUM7aUJBQ3ZCO2FBQ0Y7U0FDRjtRQUVELE9BQU8sSUFBSSxFQUFFLENBQUM7S0FDZjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDcEI7QUFDSCxDQUFDLENBQUM7QUFFRixrQkFBZSxzQkFBc0IsQ0FBQyJ9