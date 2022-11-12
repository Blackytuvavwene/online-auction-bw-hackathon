"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../../errors");
async function registerFirstUser(args) {
    const { collection: { Model, config: { slug, auth: { verify, }, }, }, req: { payload, }, req, data, } = args;
    const count = await Model.countDocuments({});
    if (count >= 1)
        throw new errors_1.Forbidden();
    // /////////////////////////////////////
    // Register first user
    // /////////////////////////////////////
    const result = await payload.create({
        req,
        collection: slug,
        data,
        overrideAccess: true,
    });
    // auto-verify (if applicable)
    if (verify) {
        await payload.update({
            id: result.id,
            collection: slug,
            data: {
                _verified: true,
            },
        });
    }
    // /////////////////////////////////////
    // Log in new user
    // /////////////////////////////////////
    const { token } = await payload.login({
        ...args,
        collection: slug,
    });
    const resultToReturn = {
        ...result,
        token,
    };
    return {
        message: 'Registered and logged in successfully. Welcome!',
        user: resultToReturn,
    };
}
exports.default = registerFirstUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJGaXJzdFVzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9vcGVyYXRpb25zL3JlZ2lzdGVyRmlyc3RVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEseUNBQXlDO0FBbUJ6QyxLQUFLLFVBQVUsaUJBQWlCLENBQUMsSUFBZTtJQUM5QyxNQUFNLEVBQ0osVUFBVSxFQUFFLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFBRSxFQUNOLElBQUksRUFDSixJQUFJLEVBQUUsRUFDSixNQUFNLEdBQ1AsR0FDRixHQUNGLEVBQ0QsR0FBRyxFQUFFLEVBQ0gsT0FBTyxHQUNSLEVBQ0QsR0FBRyxFQUNILElBQUksR0FDTCxHQUFHLElBQUksQ0FBQztJQUVULE1BQU0sS0FBSyxHQUFHLE1BQU0sS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU3QyxJQUFJLEtBQUssSUFBSSxDQUFDO1FBQUUsTUFBTSxJQUFJLGtCQUFTLEVBQUUsQ0FBQztJQUV0Qyx3Q0FBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUV4QyxNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQWE7UUFDOUMsR0FBRztRQUNILFVBQVUsRUFBRSxJQUFJO1FBQ2hCLElBQUk7UUFDSixjQUFjLEVBQUUsSUFBSTtLQUNyQixDQUFDLENBQUM7SUFFSCw4QkFBOEI7SUFDOUIsSUFBSSxNQUFNLEVBQUU7UUFDVixNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDbkIsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ2IsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFO2dCQUNKLFNBQVMsRUFBRSxJQUFJO2FBQ2hCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFFRCx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUV4QyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3BDLEdBQUcsSUFBSTtRQUNQLFVBQVUsRUFBRSxJQUFJO0tBQ2pCLENBQUMsQ0FBQztJQUVILE1BQU0sY0FBYyxHQUFHO1FBQ3JCLEdBQUcsTUFBTTtRQUNULEtBQUs7S0FDTixDQUFDO0lBRUYsT0FBTztRQUNMLE9BQU8sRUFBRSxpREFBaUQ7UUFDMUQsSUFBSSxFQUFFLGNBQWM7S0FDckIsQ0FBQztBQUNKLENBQUM7QUFFRCxrQkFBZSxpQkFBaUIsQ0FBQyJ9