"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildVersionCollectionFields = void 0;
const buildVersionCollectionFields = (collection) => {
    var _a, _b, _c;
    const fields = [
        {
            name: 'parent',
            type: 'relationship',
            index: true,
            relationTo: collection.slug,
        },
        {
            name: 'version',
            type: 'group',
            fields: collection.fields,
        },
    ];
    if (((_a = collection === null || collection === void 0 ? void 0 : collection.versions) === null || _a === void 0 ? void 0 : _a.drafts) && ((_c = (_b = collection === null || collection === void 0 ? void 0 : collection.versions) === null || _b === void 0 ? void 0 : _b.drafts) === null || _c === void 0 ? void 0 : _c.autosave)) {
        fields.push({
            name: 'autosave',
            type: 'checkbox',
            index: true,
        });
    }
    return fields;
};
exports.buildVersionCollectionFields = buildVersionCollectionFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRDb2xsZWN0aW9uRmllbGRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZlcnNpb25zL2J1aWxkQ29sbGVjdGlvbkZpZWxkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHTyxNQUFNLDRCQUE0QixHQUFHLENBQUMsVUFBcUMsRUFBVyxFQUFFOztJQUM3RixNQUFNLE1BQU0sR0FBWTtRQUN0QjtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFLGNBQWM7WUFDcEIsS0FBSyxFQUFFLElBQUk7WUFDWCxVQUFVLEVBQUUsVUFBVSxDQUFDLElBQUk7U0FDNUI7UUFDRDtZQUNFLElBQUksRUFBRSxTQUFTO1lBQ2YsSUFBSSxFQUFFLE9BQU87WUFDYixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07U0FDMUI7S0FDRixDQUFDO0lBRUYsSUFBSSxDQUFBLE1BQUEsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLFFBQVEsMENBQUUsTUFBTSxNQUFJLE1BQUEsTUFBQSxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsUUFBUSwwQ0FBRSxNQUFNLDBDQUFFLFFBQVEsQ0FBQSxFQUFFO1FBQzFFLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDVixJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsVUFBVTtZQUNoQixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBeEJXLFFBQUEsNEJBQTRCLGdDQXdCdkMifQ==