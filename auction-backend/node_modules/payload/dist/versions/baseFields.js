"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statuses = void 0;
exports.statuses = [
    {
        label: 'Draft',
        value: 'draft',
    },
    {
        label: 'Published',
        value: 'published',
    },
];
const baseVersionFields = [
    {
        name: '_status',
        label: 'Status',
        type: 'select',
        options: exports.statuses,
        defaultValue: 'draft',
        admin: {
            components: {
                Field: () => null,
            },
        },
    },
];
exports.default = baseVersionFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZUZpZWxkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJzaW9ucy9iYXNlRmllbGRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVhLFFBQUEsUUFBUSxHQUFHO0lBQ3RCO1FBQ0UsS0FBSyxFQUFFLE9BQU87UUFDZCxLQUFLLEVBQUUsT0FBTztLQUNmO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsV0FBVztRQUNsQixLQUFLLEVBQUUsV0FBVztLQUNuQjtDQUNGLENBQUM7QUFFRixNQUFNLGlCQUFpQixHQUFZO0lBQ2pDO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsUUFBUTtRQUNmLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLGdCQUFRO1FBQ2pCLFlBQVksRUFBRSxPQUFPO1FBQ3JCLEtBQUssRUFBRTtZQUNMLFVBQVUsRUFBRTtnQkFDVixLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSTthQUNsQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsa0JBQWUsaUJBQWlCLENBQUMifQ==