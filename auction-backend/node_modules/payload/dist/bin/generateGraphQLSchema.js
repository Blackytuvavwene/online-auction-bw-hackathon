"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateGraphQLSchema = void 0;
/* eslint-disable no-nested-ternary */
const fs_1 = __importDefault(require("fs"));
const graphql_1 = require("graphql");
const logger_1 = __importDefault(require("../utilities/logger"));
const load_1 = __importDefault(require("../config/load"));
const __1 = __importDefault(require(".."));
function generateGraphQLSchema() {
    const logger = (0, logger_1.default)();
    const config = (0, load_1.default)();
    __1.default.init({
        secret: '--unused--',
        mongoURL: false,
        local: true,
    });
    logger.info('Compiling GraphQL schema...');
    fs_1.default.writeFileSync(config.graphQL.schemaOutputFile, (0, graphql_1.printSchema)(__1.default.schema));
    logger.info(`GraphQL written to ${config.graphQL.schemaOutputFile}`);
}
exports.generateGraphQLSchema = generateGraphQLSchema;
// when generateGraphQLSchema.js is launched directly
if (module.id === require.main.id) {
    generateGraphQLSchema();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVHcmFwaFFMU2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Jpbi9nZW5lcmF0ZUdyYXBoUUxTY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLDRDQUFvQjtBQUNwQixxQ0FBc0M7QUFDdEMsaUVBQXlDO0FBQ3pDLDBEQUF3QztBQUN4QywyQ0FBeUI7QUFFekIsU0FBZ0IscUJBQXFCO0lBQ25DLE1BQU0sTUFBTSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0lBQ3hCLE1BQU0sTUFBTSxHQUFHLElBQUEsY0FBVSxHQUFFLENBQUM7SUFFNUIsV0FBTyxDQUFDLElBQUksQ0FBQztRQUNYLE1BQU0sRUFBRSxZQUFZO1FBQ3BCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDM0MsWUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUEscUJBQVcsRUFBQyxXQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztBQUN2RSxDQUFDO0FBYkQsc0RBYUM7QUFFRCxxREFBcUQ7QUFDckQsSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO0lBQ2pDLHFCQUFxQixFQUFFLENBQUM7Q0FDekIifQ==