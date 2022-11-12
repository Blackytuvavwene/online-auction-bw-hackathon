"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cleanUpFailedVersion = (args) => {
    const { payload, entityConfig, version } = args;
    if (version) {
        const VersionModel = payload.versions[entityConfig.slug];
        VersionModel.findOneAndDelete({ _id: version.id });
    }
};
exports.default = cleanUpFailedVersion;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW5VcEZhaWxlZFZlcnNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmVyc2lvbnMvY2xlYW5VcEZhaWxlZFZlcnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFXQSxNQUFNLG9CQUFvQixHQUFHLENBQUMsSUFBVSxFQUFFLEVBQUU7SUFDMUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBRWhELElBQUksT0FBTyxFQUFFO1FBQ1gsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3BEO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsb0JBQW9CLENBQUMifQ==