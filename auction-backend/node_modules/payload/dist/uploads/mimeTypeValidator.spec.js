"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mimeTypeValidator_1 = require("./mimeTypeValidator");
const options = { siblingData: { filename: 'file.xyz' } };
describe('mimeTypeValidator', () => {
    it('should validate single mimeType', () => {
        const mimeTypes = ['image/png'];
        const validate = (0, mimeTypeValidator_1.mimeTypeValidator)(mimeTypes);
        expect(validate('image/png', options)).toBe(true);
    });
    it('should validate multiple mimeTypes', () => {
        const mimeTypes = ['image/png', 'application/pdf'];
        const validate = (0, mimeTypeValidator_1.mimeTypeValidator)(mimeTypes);
        expect(validate('image/png', options)).toBe(true);
        expect(validate('application/pdf', options)).toBe(true);
    });
    it('should validate using wildcard', () => {
        const mimeTypes = ['image/*'];
        const validate = (0, mimeTypeValidator_1.mimeTypeValidator)(mimeTypes);
        expect(validate('image/png', options)).toBe(true);
        expect(validate('image/gif', options)).toBe(true);
    });
    it('should validate multiple wildcards', () => {
        const mimeTypes = ['image/*', 'audio/*'];
        const validate = (0, mimeTypeValidator_1.mimeTypeValidator)(mimeTypes);
        expect(validate('image/png', options)).toBe(true);
        expect(validate('audio/mpeg', options)).toBe(true);
    });
    it('should not validate when unmatched', () => {
        const mimeTypes = ['image/png'];
        const validate = (0, mimeTypeValidator_1.mimeTypeValidator)(mimeTypes);
        expect(validate('audio/mpeg', options)).toBe('Invalid file type: \'audio/mpeg\'');
    });
    it('should not validate when unmatched - multiple mimeTypes', () => {
        const mimeTypes = ['image/png', 'application/pdf'];
        const validate = (0, mimeTypeValidator_1.mimeTypeValidator)(mimeTypes);
        expect(validate('audio/mpeg', options)).toBe('Invalid file type: \'audio/mpeg\'');
    });
    it('should not validate using wildcard - unmatched', () => {
        const mimeTypes = ['image/*'];
        const validate = (0, mimeTypeValidator_1.mimeTypeValidator)(mimeTypes);
        expect(validate('audio/mpeg', options)).toBe('Invalid file type: \'audio/mpeg\'');
    });
    it('should not validate multiple wildcards - unmatched', () => {
        const mimeTypes = ['image/*', 'audio/*'];
        const validate = (0, mimeTypeValidator_1.mimeTypeValidator)(mimeTypes);
        expect(validate('video/mp4', options)).toBe('Invalid file type: \'video/mp4\'');
        expect(validate('application/pdf', options)).toBe('Invalid file type: \'application/pdf\'');
    });
    it('should not error when mimeType is missing', () => {
        const mimeTypes = ['image/*', 'application/pdf'];
        const validate = (0, mimeTypeValidator_1.mimeTypeValidator)(mimeTypes);
        let value;
        expect(validate(value, options)).toBe('Invalid file type');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWltZVR5cGVWYWxpZGF0b3Iuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGxvYWRzL21pbWVUeXBlVmFsaWRhdG9yLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBd0Q7QUFHeEQsTUFBTSxPQUFPLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQXNELENBQUM7QUFFOUcsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUNqQyxFQUFFLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxFQUFFO1FBQ3pDLE1BQU0sU0FBUyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEMsTUFBTSxRQUFRLEdBQUcsSUFBQSxxQ0FBaUIsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLEVBQUU7UUFDNUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNuRCxNQUFNLFFBQVEsR0FBRyxJQUFBLHFDQUFpQixFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxFQUFFO1FBQ3hDLE1BQU0sU0FBUyxHQUFHLENBQUMsU0FBUyxD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