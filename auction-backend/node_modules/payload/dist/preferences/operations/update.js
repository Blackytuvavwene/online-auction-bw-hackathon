"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const defaultAccess_1 = __importDefault(require("../../auth/defaultAccess"));
const executeAccess_1 = __importDefault(require("../../auth/executeAccess"));
const UnathorizedError_1 = __importDefault(require("../../errors/UnathorizedError"));
async function update(args) {
    const { overrideAccess, user, req, req: { payload: { preferences: { Model, }, }, }, key, value, } = args;
    if (!user) {
        throw new UnathorizedError_1.default();
    }
    if (!overrideAccess) {
        await (0, executeAccess_1.default)({ req }, defaultAccess_1.default);
    }
    const filter = { user: user.id, key, userCollection: user.collection };
    const preference = { ...filter, value };
    await Model.updateOne(filter, { ...preference }, { upsert: true });
    return preference;
}
exports.default = update;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ByZWZlcmVuY2VzL29wZXJhdGlvbnMvdXBkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsNkVBQXFEO0FBQ3JELDZFQUFxRDtBQUNyRCxxRkFBOEQ7QUFFOUQsS0FBSyxVQUFVLE1BQU0sQ0FBQyxJQUE2QjtJQUNqRCxNQUFNLEVBQ0osY0FBYyxFQUNkLElBQUksRUFDSixHQUFHLEVBQ0gsR0FBRyxFQUFFLEVBQ0gsT0FBTyxFQUFFLEVBQ1AsV0FBVyxFQUFFLEVBQ1gsS0FBSyxHQUNOLEdBQ0YsR0FDRixFQUNELEdBQUcsRUFDSCxLQUFLLEdBQ04sR0FBRyxJQUFJLENBQUM7SUFFVCxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsTUFBTSxJQUFJLDBCQUFpQixFQUFFLENBQUM7S0FDL0I7SUFFRCxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ25CLE1BQU0sSUFBQSx1QkFBYSxFQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsdUJBQWEsQ0FBQyxDQUFDO0tBQzdDO0lBRUQsTUFBTSxNQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2RSxNQUFNLFVBQVUsR0FBZSxFQUFFLEdBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3BELE1BQU0sS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFHLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFFbkUsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQUVELGtCQUFlLE1BQU0sQ0FBQyJ9