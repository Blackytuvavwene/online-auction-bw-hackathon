"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mimeTypeValidator = void 0;
const mimeTypeValidator = (mimeTypes) => (val, { siblingData }) => {
    if (!siblingData.filename) {
        return true;
    }
    if (!val) {
        return 'Invalid file type';
    }
    const cleanedMimeTypes = mimeTypes.map((v) => v.replace('*', ''));
    return !cleanedMimeTypes.some((v) => val.startsWith(v))
        ? `Invalid file type: '${val}'`
        : true;
};
exports.mimeTypeValidator = mimeTypeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWltZVR5cGVWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXBsb2Fkcy9taW1lVHlwZVZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFTyxNQUFNLGlCQUFpQixHQUFHLENBQUMsU0FBbUIsRUFBWSxFQUFFLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFO0lBQ25HLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1FBQ3pCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxtQkFBbUIsQ0FBQztLQUM1QjtJQUVELE1BQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyx1QkFBdUIsR0FBRyxHQUFHO1FBQy9CLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDWCxDQUFDLENBQUM7QUFiVyxRQUFBLGlCQUFpQixxQkFhNUIifQ==