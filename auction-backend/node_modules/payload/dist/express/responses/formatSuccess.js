"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatSuccessResponse = (incoming, type) => {
    switch (type) {
        case 'message':
            return {
                message: incoming,
            };
        default:
            return incoming;
    }
};
exports.default = formatSuccessResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0U3VjY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL3Jlc3BvbnNlcy9mb3JtYXRTdWNjZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUMvQyxRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssU0FBUztZQUNaLE9BQU87Z0JBQ0wsT0FBTyxFQUFFLFFBQVE7YUFDbEIsQ0FBQztRQUVKO1lBQ0UsT0FBTyxRQUFRLENBQUM7S0FDbkI7QUFDSCxDQUFDLENBQUM7QUFFRixrQkFBZSxxQkFBcUIsQ0FBQyJ9