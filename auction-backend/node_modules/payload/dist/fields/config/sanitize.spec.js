"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sanitize_1 = __importDefault(require("./sanitize"));
const errors_1 = require("../../errors");
describe('sanitizeFields', () => {
    it('should throw on missing type field', () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const fields = [{
                label: 'some-collection',
                name: 'Some Collection',
            }];
        expect(() => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (0, sanitize_1.default)(fields, []);
        }).toThrow(errors_1.MissingFieldType);
    });
    it("should throw on invalid field name", () => {
        const fields = [
            {
                label: "some.collection",
                name: "some.collection",
                type: "text",
            }
        ];
        expect(() => {
            (0, sanitize_1.default)(fields, []);
        }).toThrow(errors_1.InvalidFieldName);
    });
    describe('auto-labeling', () => {
        it('should populate label if missing', () => {
            const fields = [{
                    name: 'someField',
                    type: 'text',
                }];
            const sanitizedField = (0, sanitize_1.default)(fields, [])[0];
            expect(sanitizedField.name).toStrictEqual('someField');
            expect(sanitizedField.label).toStrictEqual('Some Field');
            expect(sanitizedField.type).toStrictEqual('text');
        });
        it('should allow auto-label override', () => {
            const fields = [{
                    name: 'someField',
                    type: 'text',
                    label: 'Do not label',
                }];
            const sanitizedField = (0, sanitize_1.default)(fields, [])[0];
            expect(sanitizedField.name).toStrictEqual('someField');
            expect(sanitizedField.label).toStrictEqual('Do not label');
            expect(sanitizedField.type).toStrictEqual('text');
        });
        describe('opt-out', () => {
            it('should allow label opt-out', () => {
                const fields = [{
                        name: 'someField',
                        type: 'text',
                        label: false,
                    }];
                const sanitizedField = (0, sanitize_1.default)(fields, [])[0];
                expect(sanitizedField.name).toStrictEqual('someField');
                expect(sanitizedField.label).toStrictEqual(false);
                expect(sanitizedField.type).toStrictEqual('text');
            });
            it('should allow label opt-out for arrays', () => {
                const arrayField = {
                    name: 'items',
                    type: 'array',
                    label: false,
                    fields: [
                        {
                            name: 'itemName',
                            type: 'text',
                        },
                    ],
                };
                const sanitizedField = (0, sanitize_1.default)([arrayField], [])[0];
                expect(sanitizedField.name).toStrictEqual('items');
                expect(sanitizedField.label).toStrictEqual(false);
                expect(sanitizedField.type).toStrictEqual('array');
                expect(sanitizedField.labels).toBeUndefined();
            });
            it('should allow label opt-out for blocks', () => {
                const fields = [{
                        name: 'noLabelBlock',
                        type: 'blocks',
                        label: false,
                        blocks: [
                            {
                                slug: 'number',
                                fields: [
                                    {
                                        name: 'testNumber',
                                        type: 'number',
                                    },
                                ],
                            },
                        ],
                    }];
                const sanitizedField = (0, sanitize_1.default)(fields, [])[0];
                expect(sanitizedField.name).toStrictEqual('noLabelBlock');
                expect(sanitizedField.label).toStrictEqual(false);
                expect(sanitizedField.type).toStrictEqual('blocks');
                expect(sanitizedField.labels).toBeUndefined();
            });
        });
        it('should label arrays with plural and singular', () => {
            const fields = [{
                    name: 'items',
                    type: 'array',
                    fields: [
                        {
                            name: 'itemName',
                            type: 'text',
                        },
                    ],
                }];
            const sanitizedField = (0, sanitize_1.default)(fields, [])[0];
            expect(sanitizedField.name).toStrictEqual('items');
            expect(sanitizedField.label).toStrictEqual('Items');
            expect(sanitizedField.type).toStrictEqual('array');
            expect(sanitizedField.labels).toMatchObject({ singular: 'Item', plural: 'Items' });
        });
        it('should label blocks with plural and singular', () => {
            const fields = [{
                    name: 'specialBlock',
                    type: 'blocks',
                    blocks: [
                        {
                            slug: 'number',
                            fields: [{ name: 'testNumber', type: 'number' }],
                        },
                    ],
                }];
            const sanitizedField = (0, sanitize_1.default)(fields, [])[0];
            expect(sanitizedField.name).toStrictEqual('specialBlock');
            expect(sanitizedField.label).toStrictEqual('Special Block');
            expect(sanitizedField.type).toStrictEqual('blocks');
            expect(sanitizedField.labels).toMatchObject({ singular: 'Special Block', plural: 'Special Blocks' });
            expect(sanitizedField.blocks[0].fields[0].label).toStrictEqual('Test Number');
        });
    });
    describe('relationships', () => {
        it('should not throw on valid relationship', () => {
            const validRelationships = ['some-collection'];
            const fields = [{
                    type: 'relationship',
                    label: 'my-relationship',
                    name: 'My Relationship',
                    relationTo: 'some-collection',
                }];
            expect(() => {
                (0, sanitize_1.default)(fields, validRelationships);
            }).not.toThrow();
        });
        it('should not throw on valid relationship - multiple', () => {
            const validRelationships = ['some-collection', 'another-collection'];
            const fields = [{
                    type: 'relationship',
                    label: 'my-relationship',
                    name: 'My Relationship',
                    relationTo: ['some-collection', 'another-collection'],
                }];
            expect(() => {
                (0, sanitize_1.default)(fields, validRelationships);
            }).not.toThrow();
        });
        it('should not throw on valid relationship inside blocks', () => {
            const validRelationships = ['some-collection'];
            const relationshipBlock = {
                slug: 'relationshipBlock',
                fields: [{
                        type: 'relationship',
                        label: 'my-relationship',
                        name: 'My Relationship',
                        relationTo: 'some-collection',
                    }],
            };
            const fields = [{
                    name: 'layout',
                    label: 'Layout Blocks',
                    type: 'blocks',
                    blocks: [relationshipBlock],
                }];
            expect(() => {
                (0, sanitize_1.default)(fields, validRelationships);
            }).not.toThrow();
        });
        it('should throw on invalid relationship', () => {
            const validRelationships = ['some-collection'];
            const fields = [{
                    type: 'relationship',
                    label: 'my-relationship',
                    name: 'My Relationship',
                    relationTo: 'not-valid',
                }];
            expect(() => {
                (0, sanitize_1.default)(fields, validRelationships);
            }).toThrow(errors_1.InvalidFieldRelationship);
        });
        it('should throw on invalid relationship - multiple', () => {
            const validRelationships = ['some-collection', 'another-collection'];
            const fields = [{
                    type: 'relationship',
                    label: 'my-relationship',
                    name: 'My Relationship',
                    relationTo: ['some-collection', 'not-valid'],
                }];
            expect(() => {
                (0, sanitize_1.default)(fields, validRelationships);
            }).toThrow(errors_1.InvalidFieldRelationship);
        });
        it('should throw on invalid relationship inside blocks', () => {
            const validRelationships = ['some-collection'];
            const relationshipBlock = {
                slug: 'relationshipBlock',
                fields: [{
                        type: 'relationship',
                        label: 'my-relationship',
                        name: 'My Relationship',
                        relationTo: 'not-valid',
                    }],
            };
            const fields = [{
                    name: 'layout',
                    label: 'Layout Blocks',
                    type: 'blocks',
                    blocks: [relationshipBlock],
                }];
            expect(() => {
                (0, sanitize_1.default)(fields, validRelationships);
            }).toThrow(errors_1.InvalidFieldRelationship);
        });
        it('should defaultValue of checkbox to false if required and undefined', () => {
            const fields = [{
                    type: 'checkbox',
                    name: 'My Checkbox',
                    required: true,
                }];
            const sanitizedField = (0, sanitize_1.default)(fields, [])[0];
            expect(sanitizedField.defaultValue).toStrictEqual(false);
        });
        it('should return empty field array if no fields', () => {
            const sanitizedFields = (0, sanitize_1.default)([], []);
            expect(sanitizedFields).toStrictEqual([]);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FuaXRpemUuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9maWVsZHMvY29uZmlnL3Nhbml0aXplLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBd0M7QUFDeEMseUNBQTRGO0FBRzVGLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLEVBQUU7SUFDOUIsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEdBQUcsRUFBRTtRQUM1Qyw2REFBNkQ7UUFDN0QsYUFBYTtRQUNiLE1BQU0sTUFBTSxHQUFZLENBQUM7Z0JBQ3ZCLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCLElBQUksRUFBRSxpQkFBaUI7YUFDeEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNWLDZEQUE2RDtZQUM3RCxhQUFhO1lBQ2IsSUFBQSxrQkFBYyxFQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMseUJBQWdCLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLEVBQUU7UUFDNUMsTUFBTSxNQUFNLEdBQVk7WUFDdEI7Z0JBQ0UsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsSUFBSSxFQUFFLE1BQU07YUFDYjtTQUNGLENBQUM7UUFDRixNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBQSxrQkFBYyxFQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMseUJBQWdCLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO1FBQzdCLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFHLEVBQUU7WUFDMUMsTUFBTSxNQUFNLEdBQVks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