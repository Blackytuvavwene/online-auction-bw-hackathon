"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseBlockFields = void 0;
const baseIDField_1 = require("./baseIDField");
exports.baseBlockFields = [
    baseIDField_1.baseIDField,
    {
        name: 'blockName',
        label: 'Block Name',
        type: 'text',
        required: false,
        admin: {
            disabled: true,
        },
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZUJsb2NrRmllbGRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ZpZWxkcy9iYXNlRmllbGRzL2Jhc2VCbG9ja0ZpZWxkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwrQ0FBNEM7QUFFL0IsUUFBQSxlQUFlLEdBQVk7SUFDdEMseUJBQVc7SUFDWDtRQUNFLElBQUksRUFBRSxXQUFXO1FBQ2pCLEtBQUssRUFBRSxZQUFZO1FBQ25CLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLEtBQUs7UUFDZixLQUFLLEVBQUU7WUFDTCxRQUFRLEVBQUUsSUFBSTtTQUNmO0tBQ0Y7Q0FDRixDQUFDIn0=