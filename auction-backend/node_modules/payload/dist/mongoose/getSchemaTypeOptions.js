"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchemaTypeOptions = void 0;
const getSchemaTypeOptions = (schemaType) => {
    if ((schemaType === null || schemaType === void 0 ? void 0 : schemaType.instance) === 'Array') {
        return schemaType.options.type[0];
    }
    return schemaType === null || schemaType === void 0 ? void 0 : schemaType.options;
};
exports.getSchemaTypeOptions = getSchemaTypeOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2NoZW1hVHlwZU9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9uZ29vc2UvZ2V0U2NoZW1hVHlwZU9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxvQkFBb0IsR0FBRyxDQUFDLFVBQXNCLEVBQTZDLEVBQUU7SUFDeEcsSUFBSSxDQUFBLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRLE1BQUssT0FBTyxFQUFFO1FBQ3BDLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkM7SUFFRCxPQUFPLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxPQUFPLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBTlcsUUFBQSxvQkFBb0Isd0JBTS9CIn0=