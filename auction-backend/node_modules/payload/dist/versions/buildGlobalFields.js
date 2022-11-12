"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildVersionGlobalFields = void 0;
const buildVersionGlobalFields = (global) => {
    var _a, _b, _c;
    const fields = [
        {
            name: 'version',
            type: 'group',
            fields: global.fields,
        },
    ];
    if (((_a = global === null || global === void 0 ? void 0 : global.versions) === null || _a === void 0 ? void 0 : _a.drafts) && ((_c = (_b = global === null || global === void 0 ? void 0 : global.versions) === null || _b === void 0 ? void 0 : _b.drafts) === null || _c === void 0 ? void 0 : _c.autosave)) {
        fields.push({
            name: 'autosave',
            type: 'checkbox',
            index: true,
        });
    }
    return fields;
};
exports.buildVersionGlobalFields = buildVersionGlobalFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRHbG9iYWxGaWVsZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmVyc2lvbnMvYnVpbGRHbG9iYWxGaWVsZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR08sTUFBTSx3QkFBd0IsR0FBRyxDQUFDLE1BQTZCLEVBQVcsRUFBRTs7SUFDakYsTUFBTSxNQUFNLEdBQVk7UUFDdEI7WUFDRSxJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxPQUFPO1lBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1NBQ3RCO0tBQ0YsQ0FBQztJQUVGLElBQUksQ0FBQSxNQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxRQUFRLDBDQUFFLE1BQU0sTUFBSSxNQUFBLE1BQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFFBQVEsMENBQUUsTUFBTSwwQ0FBRSxRQUFRLENBQUEsRUFBRTtRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1YsSUFBSSxFQUFFLFVBQVU7WUFDaEIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLENBQUM7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQWxCVyxRQUFBLHdCQUF3Qiw0QkFrQm5DIn0=