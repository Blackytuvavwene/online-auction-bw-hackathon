"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formatName_1 = __importDefault(require("../utilities/formatName"));
const buildObjectType_1 = __importDefault(require("./buildObjectType"));
function buildBlockType({ payload, block, forceNullable, }) {
    const { slug, labels: { singular, }, } = block;
    if (!payload.types.blockTypes[slug]) {
        const formattedBlockName = (0, formatName_1.default)(singular);
        payload.types.blockTypes[slug] = (0, buildObjectType_1.default)({
            payload,
            name: formattedBlockName,
            parentName: formattedBlockName,
            fields: [
                ...block.fields,
                {
                    name: 'blockType',
                    type: 'text',
                },
            ],
            forceNullable,
        });
    }
}
exports.default = buildBlockType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRCbG9ja1R5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZ3JhcGhxbC9zY2hlbWEvYnVpbGRCbG9ja1R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSx5RUFBaUQ7QUFDakQsd0VBQWdEO0FBUWhELFNBQVMsY0FBYyxDQUFDLEVBQ3RCLE9BQU8sRUFDUCxLQUFLLEVBQ0wsYUFBYSxHQUNSO0lBQ0wsTUFBTSxFQUNKLElBQUksRUFDSixNQUFNLEVBQUUsRUFDTixRQUFRLEdBQ1QsR0FDRixHQUFHLEtBQUssQ0FBQztJQUVWLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNuQyxNQUFNLGtCQUFrQixHQUFHLElBQUEsb0JBQVUsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFBLHlCQUFlLEVBQUM7WUFDL0MsT0FBTztZQUNQLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsVUFBVSxFQUFFLGtCQUFrQjtZQUM5QixNQUFNLEVBQUU7Z0JBQ04sR0FBRyxLQUFLLENBQUMsTUFBTTtnQkFDZjtvQkFDRSxJQUFJLEVBQUUsV0FBVztvQkFDakIsSUFBSSxFQUFFLE1BQU07aUJBQ2I7YUFDRjtZQUNELGFBQWE7U0FDZCxDQUFDLENBQUM7S0FDSjtBQUNILENBQUM7QUFFRCxrQkFBZSxjQUFjLENBQUMifQ==