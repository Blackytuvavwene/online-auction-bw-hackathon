"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatLabels_1 = require("./formatLabels");
describe('formatLabels', () => {
    it('should format singular slug', () => {
        expect((0, formatLabels_1.formatLabels)('word')).toMatchObject({
            singular: 'Word',
            plural: 'Words',
        });
    });
    it('should format plural slug', () => {
        expect((0, formatLabels_1.formatLabels)('words')).toMatchObject({
            singular: 'Word',
            plural: 'Words',
        });
    });
    it('should format kebab case', () => {
        expect((0, formatLabels_1.formatLabels)('my-slugs')).toMatchObject({
            singular: 'My Slug',
            plural: 'My Slugs',
        });
    });
    it('should format camelCase', () => {
        expect((0, formatLabels_1.formatLabels)('camelCaseItems')).toMatchObject({
            singular: 'Camel Case Item',
            plural: 'Camel Case Items',
        });
    });
    describe('toWords', () => {
        it('should convert camel to capitalized words', () => {
            expect((0, formatLabels_1.toWords)('camelCaseItems')).toBe('Camel Case Items');
        });
        it('should allow no separator (used for building GraphQL label from name)', () => {
            expect((0, formatLabels_1.toWords)('myGraphField', true)).toBe('MyGraphField');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0TGFiZWxzLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbGl0aWVzL2Zvcm1hdExhYmVscy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXVEO0FBRXZELFFBQVEsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFO0lBQzVCLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUU7UUFDckMsTUFBTSxDQUFDLElBQUEsMkJBQVksRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUN6QyxRQUFRLEVBQUUsTUFBTTtZQUNoQixNQUFNLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLEVBQUU7UUFDbkMsTUFBTSxDQUFDLElBQUEsMkJBQVksRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxRQUFRLEVBQUUsTUFBTTtZQUNoQixNQUFNLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxHQUFHLEVBQUU7UUFDbEMsTUFBTSxDQUFDLElBQUEsMkJBQVksRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztZQUM3QyxRQUFRLEVBQUUsU0FBUztZQUNuQixNQUFNLEVBQUUsVUFBVTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7UUFDakMsTUFBTSxDQUFDLElBQUEsMkJBQVksRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ25ELFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsTUFBTSxFQUFFLGtCQUFrQjtTQUMzQixDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ3ZCLEVBQUUsQ0FBQywyQ0FBMkMsRUFBRSxHQUFHLEVBQUU7WUFDbkQsTUFBTSxDQUFDLElBQUEsc0JBQU8sRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsdUVBQXVFLEVBQUUsR0FBRyxFQUFFO1lBQy9FLE1BQU0sQ0FBQyxJQUFBLHNCQUFPLEVBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9