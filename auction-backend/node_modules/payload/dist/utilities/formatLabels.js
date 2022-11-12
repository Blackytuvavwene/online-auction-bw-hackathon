"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toWords = exports.formatLabels = void 0;
const pluralize_1 = __importStar(require("pluralize"));
const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const toWords = (inputString, joinWords = false) => {
    const notNullString = inputString || '';
    const trimmedString = notNullString.trim();
    const arrayOfStrings = trimmedString.split(/[\s-]/);
    const splitStringsArray = [];
    arrayOfStrings.forEach((tempString) => {
        if (tempString !== '') {
            const splitWords = tempString.split(/(?=[A-Z])/).join(' ');
            splitStringsArray.push(capitalizeFirstLetter(splitWords));
        }
    });
    return joinWords
        ? splitStringsArray.join('').replace(/\s/gi, '')
        : splitStringsArray.join(' ');
};
exports.toWords = toWords;
const formatLabels = ((slug) => {
    const words = toWords(slug);
    return ((0, pluralize_1.isPlural)(slug))
        ? {
            singular: (0, pluralize_1.singular)(words),
            plural: words,
        }
        : {
            singular: words,
            plural: (0, pluralize_1.default)(words),
        };
});
exports.formatLabels = formatLabels;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0TGFiZWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9mb3JtYXRMYWJlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBMEQ7QUFFMUQsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLE1BQWMsRUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTNHLE1BQU0sT0FBTyxHQUFHLENBQUMsV0FBbUIsRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFVLEVBQUU7SUFDakUsTUFBTSxhQUFhLEdBQUcsV0FBVyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxNQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0MsTUFBTSxjQUFjLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVwRCxNQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztJQUM3QixjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUU7UUFDcEMsSUFBSSxVQUFVLEtBQUssRUFBRSxFQUFFO1lBQ3JCLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNELGlCQUFpQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFNBQVM7UUFDZCxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO1FBQ2hELENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDO0FBaUJBLDBCQUFPO0FBZlQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQVksRUFBd0MsRUFBRTtJQUMzRSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLElBQUEsb0JBQVEsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUM7WUFDQSxRQUFRLEVBQUUsSUFBQSxvQkFBUSxFQUFDLEtBQUssQ0FBQztZQUN6QixNQUFNLEVBQUUsS0FBSztTQUNkO1FBQ0QsQ0FBQyxDQUFDO1lBQ0EsUUFBUSxFQUFFLEtBQUs7WUFDZixNQUFNLEVBQUUsSUFBQSxtQkFBUyxFQUFDLEtBQUssQ0FBQztTQUN6QixDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUM7QUFHRCxvQ0FBWSJ9