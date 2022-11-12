"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldIncrementVersionCount = void 0;
const shouldIncrementVersionCount = ({ entity, docStatus, versions }) => {
    var _a, _b, _c, _d, _e;
    return !(((_a = entity === null || entity === void 0 ? void 0 : entity.versions) === null || _a === void 0 ? void 0 : _a.drafts) && ((_b = entity.versions.drafts) === null || _b === void 0 ? void 0 : _b.autosave))
        && (docStatus === 'published' || (docStatus === 'draft' && ((_e = (_d = (_c = versions === null || versions === void 0 ? void 0 : versions.docs) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.version) === null || _e === void 0 ? void 0 : _e._status) !== 'draft'));
};
exports.shouldIncrementVersionCount = shouldIncrementVersionCount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdWxkSW5jcmVtZW50VmVyc2lvbkNvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZlcnNpb25zL3Nob3VsZEluY3JlbWVudFZlcnNpb25Db3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFVTyxNQUFNLDJCQUEyQixHQUFnQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFOztJQUMxRyxPQUFPLENBQUMsQ0FBQyxDQUFBLE1BQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFFBQVEsMENBQUUsTUFBTSxNQUFJLE1BQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLDBDQUFFLFFBQVEsQ0FBQSxDQUFDO1dBQ2pFLENBQUMsU0FBUyxLQUFLLFdBQVcsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLElBQUksQ0FBQSxNQUFBLE1BQUEsTUFBQSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsSUFBSSwwQ0FBRyxDQUFDLENBQUMsMENBQUUsT0FBTywwQ0FBRSxPQUFPLE1BQUssT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNuSCxDQUFDLENBQUM7QUFIVyxRQUFBLDJCQUEyQiwrQkFHdEMifQ==