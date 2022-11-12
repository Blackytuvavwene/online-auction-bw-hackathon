"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validations_1 = require("../../fields/validations");
exports.default = [
    {
        name: 'email',
        label: 'Email',
        type: 'email',
        validate: validations_1.email,
        unique: true,
        admin: {
            components: {
                Field: () => null,
            },
        },
    },
    {
        name: 'resetPasswordToken',
        type: 'text',
        hidden: true,
    },
    {
        name: 'resetPasswordExpiration',
        type: 'date',
        hidden: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL2Jhc2VGaWVsZHMvYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBEQUFpRDtBQUdqRCxrQkFBZTtJQUNiO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixLQUFLLEVBQUUsT0FBTztRQUNkLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFLG1CQUFLO1FBQ2YsTUFBTSxFQUFFLElBQUk7UUFDWixLQUFLLEVBQUU7WUFDTCxVQUFVLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUk7YUFDbEI7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxNQUFNO1FBQ1osTUFBTSxFQUFFLElBQUk7S0FDYjtJQUNEO1FBQ0UsSUFBSSxFQUFFLHlCQUF5QjtRQUMvQixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxJQUFJO0tBQ2I7Q0FDUyxDQUFDIn0=