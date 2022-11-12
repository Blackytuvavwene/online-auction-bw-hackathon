"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalizedSortProperty = void 0;
const types_1 = require("../fields/config/types");
const flattenTopLevelFields_1 = __importDefault(require("../utilities/flattenTopLevelFields"));
const getLocalizedSortProperty = ({ segments: incomingSegments, config, fields: incomingFields, locale, result: incomingResult, }) => {
    // If localization is not enabled, accept exactly
    // what is sent in
    if (!config.localization) {
        return incomingSegments.join('.');
    }
    // Flatten incoming fields (row, etc)
    const fields = (0, flattenTopLevelFields_1.default)(incomingFields);
    const segments = [...incomingSegments];
    // Retrieve first segment, and remove from segments
    const firstSegment = segments.shift();
    // Attempt to find a matched field
    const matchedField = fields.find((field) => (0, types_1.fieldAffectsData)(field) && field.name === firstSegment);
    if (matchedField && !(0, types_1.fieldIsPresentationalOnly)(matchedField)) {
        let nextFields;
        const remainingSegments = [...segments];
        let localizedSegment = matchedField.name;
        if (matchedField.localized) {
            // Check to see if next segment is a locale
            if (segments.length > 0) {
                const nextSegmentIsLocale = config.localization.locales.includes(remainingSegments[0]);
                // If next segment is locale, remove it from remaining segments
                // and use it to localize the current segment
                if (nextSegmentIsLocale) {
                    const nextSegment = remainingSegments.shift();
                    localizedSegment = `${matchedField.name}.${nextSegment}`;
                }
            }
            else {
                // If no more segments, but field is localized, use default locale
                localizedSegment = `${matchedField.name}.${locale}`;
            }
        }
        // If there are subfields, pass them through
        if (matchedField.type === 'tab' || matchedField.type === 'group' || matchedField.type === 'array') {
            nextFields = matchedField.fields;
        }
        if (matchedField.type === 'blocks') {
            nextFields = matchedField.blocks.reduce((flattenedBlockFields, block) => {
                return [
                    ...flattenedBlockFields,
                    ...block.fields.filter((blockField) => ((0, types_1.fieldAffectsData)(blockField) && (blockField.name !== 'blockType' && blockField.name !== 'blockName')) || !(0, types_1.fieldAffectsData)(blockField)),
                ];
            }, []);
        }
        const result = incomingResult ? `${incomingResult}.${localizedSegment}` : localizedSegment;
        if (nextFields) {
            return (0, exports.getLocalizedSortProperty)({
                segments: remainingSegments,
                config,
                fields: nextFields,
                locale,
                result,
            });
        }
        return result;
    }
    return incomingSegments.join('.');
};
exports.getLocalizedSortProperty = getLocalizedSortProperty;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TG9jYWxpemVkU29ydFByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vbmdvb3NlL2dldExvY2FsaXplZFNvcnRQcm9wZXJ0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxrREFBNEY7QUFDNUYsK0ZBQXVFO0FBVWhFLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxFQUN2QyxRQUFRLEVBQUUsZ0JBQWdCLEVBQzFCLE1BQU0sRUFDTixNQUFNLEVBQUUsY0FBYyxFQUN0QixNQUFNLEVBQ04sTUFBTSxFQUFFLGNBQWMsR0FDakIsRUFBVSxFQUFFO0lBQ2pCLGlEQUFpRDtJQUNqRCxrQkFBa0I7SUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7UUFDeEIsT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbkM7SUFFRCxxQ0FBcUM7SUFDckMsTUFBTSxNQUFNLEdBQUcsSUFBQSwrQkFBcUIsRUFBQyxjQUFjLENBQUMsQ0FBQztJQUVyRCxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQztJQUV2QyxtREFBbUQ7SUFDbkQsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXRDLGtDQUFrQztJQUNsQyxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFBLHdCQUFnQixFQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUM7SUFFcEcsSUFBSSxZQUFZLElBQUksQ0FBQyxJQUFBLGlDQUF5QixFQUFDLFlBQVksQ0FBQyxFQUFFO1FBQzVELElBQUksVUFBbUIsQ0FBQztRQUN4QixNQUFNLGlCQUFpQixHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLGdCQUFnQixHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFFekMsSUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFO1lBQzFCLDJDQUEyQztZQUMzQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2RiwrREFBK0Q7Z0JBQy9ELDZDQUE2QztnQkFDN0MsSUFBSSxtQkFBbUIsRUFBRTtvQkFDdkIsTUFBTSxXQUFXLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQzlDLGdCQUFnQixHQUFHLEdBQUcsWUFBWSxDQUFDLElBQUksSUFBSSxXQUFXLEVBQUUsQ0FBQztpQkFDMUQ7YUFDRjtpQkFBTTtnQkFDTCxrRUFBa0U7Z0JBQ2xFLGdCQUFnQixHQUFHLEdBQUcsWUFBWSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUUsQ0FBQzthQUNyRDtTQUNGO1FBRUQsNENBQTRDO1FBQzVDLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDakcsVUFBVSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7U0FDbEM7UUFFRCxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2xDLFVBQVUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN0RSxPQUFPO29CQUNMLEdBQUcsb0JBQW9CO29CQUN2QixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUEsd0JBQWdCLEVBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxVQUFVLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFBLHdCQUFnQixFQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNoTCxDQUFDO1lBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1I7UUFFRCxNQUFNLE1BQU0sR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsY0FBYyxJQUFJLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBRTNGLElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTyxJQUFBLGdDQUF3QixFQUFDO2dCQUM5QixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixNQUFNO2dCQUNOLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixNQUFNO2dCQUNOLE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFFRCxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUM7QUE1RVcsUUFBQSx3QkFBd0IsNEJBNEVuQyJ9