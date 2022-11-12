"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
const mongoose_1 = __importDefault(require("mongoose"));
const testCredentials_1 = require("./testCredentials");
const connectMongoose = async (url, options, logger) => {
    let urlToConnect = url;
    let successfulConnectionMessage = 'Connected to Mongo server successfully!';
    const connectionOptions = {
        autoIndex: true,
        ...options,
        useNewUrlParser: true,
    };
    let mongoMemoryServer;
    if (process.env.NODE_ENV === 'test') {
        connectionOptions.dbName = 'payloadmemory';
        const { MongoMemoryServer } = require('mongodb-memory-server');
        const getPort = require('get-port');
        const port = await getPort();
        mongoMemoryServer = await MongoMemoryServer.create({
            instance: {
                dbName: testCredentials_1.connection.name,
                port,
            },
        });
        urlToConnect = mongoMemoryServer.getUri();
        successfulConnectionMessage = 'Connected to in-memory Mongo server successfully!';
    }
    try {
        await mongoose_1.default.connect(urlToConnect, connectionOptions);
        if (process.env.PAYLOAD_DROP_DATABASE === 'true') {
            logger.info('---- DROPPING DATABASE ----');
            await mongoose_1.default.connection.dropDatabase();
            logger.info('---- DROPPED DATABASE ----');
        }
        logger.info(successfulConnectionMessage);
    }
    catch (err) {
        logger.error(`Error: cannot connect to MongoDB. Details: ${err.message}`, err);
        process.exit(1);
    }
    return mongoMemoryServer;
};
exports.default = connectMongoose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb25nb29zZS9jb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELG1DQUFtQztBQUNuQyx3REFBb0Q7QUFFcEQsdURBQStDO0FBRS9DLE1BQU0sZUFBZSxHQUFHLEtBQUssRUFDM0IsR0FBVyxFQUNYLE9BQXVCLEVBQ3ZCLE1BQW1CLEVBQ0UsRUFBRTtJQUN2QixJQUFJLFlBQVksR0FBRyxHQUFHLENBQUM7SUFDdkIsSUFBSSwyQkFBMkIsR0FBRyx5Q0FBeUMsQ0FBQztJQUM1RSxNQUFNLGlCQUFpQixHQUFHO1FBQ3hCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsR0FBRyxPQUFPO1FBQ1YsZUFBZSxFQUFFLElBQUk7S0FDdEIsQ0FBQztJQUVGLElBQUksaUJBQWlCLENBQUM7SUFFdEIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7UUFDbkMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztRQUMzQyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMvRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztRQUM3QixpQkFBaUIsR0FBRyxNQUFNLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztZQUNqRCxRQUFRLEVBQUU7Z0JBQ1IsTUFBTSxFQUFFLDRCQUFVLENBQUMsSUFBSTtnQkFDdkIsSUFBSTthQUNMO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsWUFBWSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFDLDJCQUEyQixHQUFHLG1EQUFtRCxDQUFDO0tBQ25GO0lBRUQsSUFBSTtRQUNGLE1BQU0sa0JBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFFeEQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixLQUFLLE1BQU0sRUFBRTtZQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDM0MsTUFBTSxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDM0M7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7S0FDMUM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE1BQU0sQ0FBQyxLQUFLLENBQUMsOENBQThDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCO0lBRUQsT0FBTyxpQkFBaUIsQ0FBQztBQUMzQixDQUFDLENBQUM7QUFFRixrQkFBZSxlQUFlLENBQUMifQ==