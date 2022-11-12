"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendVersionToQueryKey = void 0;
const appendVersionToQueryKey = (query) => {
    return Object.entries(query).reduce((res, [key, val]) => {
        if (['and', 'or'].includes(key) && Array.isArray(val)) {
            return {
                ...res,
                [key]: val.map((subQuery) => (0, exports.appendVersionToQueryKey)(subQuery)),
            };
        }
        if (key !== 'id') {
            return {
                ...res,
                [`version.${key}`]: val,
            };
        }
        return res;
    }, {});
};
exports.appendVersionToQueryKey = appendVersionToQueryKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwZW5kVmVyc2lvblRvUXVlcnlLZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmVyc2lvbnMvZHJhZnRzL2FwcGVuZFZlcnNpb25Ub1F1ZXJ5S2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVPLE1BQU0sdUJBQXVCLEdBQUcsQ0FBQyxLQUFZLEVBQVMsRUFBRTtJQUM3RCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUU7UUFDdEQsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNyRCxPQUFPO2dCQUNMLEdBQUcsR0FBRztnQkFDTixDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLElBQUEsK0JBQXVCLEVBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEUsQ0FBQztTQUNIO1FBRUQsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2hCLE9BQU87Z0JBQ0wsR0FBRyxHQUFHO2dCQUNOLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUc7YUFDeEIsQ0FBQztTQUNIO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDLENBQUM7QUFsQlcsUUFBQSx1QkFBdUIsMkJBa0JsQyJ9