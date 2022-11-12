"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIDType = void 0;
const getIDType = (idField) => {
    if (idField) {
        return idField.type === 'number' ? 'number' : 'text';
    }
    return 'ObjectID';
};
exports.getIDType = getIDType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SURUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxpdGllcy9nZXRJRFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxTQUFTLEdBQUcsQ0FBQyxPQUFxQixFQUFrQyxFQUFFO0lBQ2pGLElBQUksT0FBTyxFQUFFO1FBQ1gsT0FBTyxPQUFPLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FDdEQ7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFMVyxRQUFBLFNBQVMsYUFLcEIifQ==