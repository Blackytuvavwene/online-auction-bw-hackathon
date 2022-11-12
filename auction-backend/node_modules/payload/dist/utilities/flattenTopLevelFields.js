"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../fields/config/types");
const flattenFields = (fields, keepPresentationalFields) => {
    return fields.reduce((fieldsToUse, field) => {
        if ((0, types_1.fieldAffectsData)(field) || (keepPresentationalFields && (0, types_1.fieldIsPresentationalOnly)(field))) {
            return [
                ...fieldsToUse,
                field,
            ];
        }
        if ((0, types_1.fieldHasSubFields)(field)) {
            return [
                ...fieldsToUse,
                ...flattenFields(field.fields, keepPresentationalFields),
            ];
        }
        if (field.type === 'tabs') {
            return [
                ...fieldsToUse,
                ...field.tabs.reduce((tabFields, tab) => {
                    return [
                        ...tabFields,
                        ...((0, types_1.tabHasName)(tab) ? [{ ...tab, type: 'tab' }] : flattenFields(tab.fields, keepPresentationalFields)),
                    ];
                }, []),
            ];
        }
        return fieldsToUse;
    }, []);
};
exports.default = flattenFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdHRlblRvcExldmVsRmllbGRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9mbGF0dGVuVG9wTGV2ZWxGaWVsZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFRZ0M7QUFFaEMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUFlLEVBQUUsd0JBQWtDLEVBQW9ELEVBQUU7SUFDOUgsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQzFDLElBQUksSUFBQSx3QkFBZ0IsRUFBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixJQUFJLElBQUEsaUNBQXlCLEVBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM3RixPQUFPO2dCQUNMLEdBQUcsV0FBVztnQkFDZCxLQUFLO2FBQ04sQ0FBQztTQUNIO1FBRUQsSUFBSSxJQUFBLHlCQUFpQixFQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVCLE9BQU87Z0JBQ0wsR0FBRyxXQUFXO2dCQUNkLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsd0JBQXdCLENBQUM7YUFDekQsQ0FBQztTQUNIO1FBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUN6QixPQUFPO2dCQUNMLEdBQUcsV0FBVztnQkFDZCxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUN0QyxPQUFPO3dCQUNMLEdBQUcsU0FBUzt3QkFDWixHQUFHLENBQUMsSUFBQSxrQkFBVSxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLHdCQUF3QixDQUFDLENBQUM7cUJBQ3ZHLENBQUM7Z0JBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNQLENBQUM7U0FDSDtRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNULENBQUMsQ0FBQztBQUVGLGtCQUFlLGFBQWEsQ0FBQyJ9