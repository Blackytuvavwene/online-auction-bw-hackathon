"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSortParam = void 0;
const getLocalizedSortProperty_1 = require("./getLocalizedSortProperty");
const buildSortParam = ({ sort, config, fields, timestamps, locale }) => {
    let sortProperty;
    let sortOrder = 'desc';
    if (!sort) {
        if (timestamps) {
            sortProperty = 'createdAt';
        }
        else {
            sortProperty = '_id';
        }
    }
    else if (sort.indexOf('-') === 0) {
        sortProperty = sort.substring(1);
    }
    else {
        sortProperty = sort;
        sortOrder = 'asc';
    }
    if (sortProperty === 'id') {
        sortProperty = '_id';
    }
    else {
        sortProperty = (0, getLocalizedSortProperty_1.getLocalizedSortProperty)({
            segments: sortProperty.split('.'),
            config,
            fields,
            locale,
        });
    }
    return [sortProperty, sortOrder];
};
exports.buildSortParam = buildSortParam;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRTb3J0UGFyYW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9uZ29vc2UvYnVpbGRTb3J0UGFyYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUVBQXNFO0FBVy9ELE1BQU0sY0FBYyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFRLEVBQW9CLEVBQUU7SUFDckcsSUFBSSxZQUFvQixDQUFDO0lBQ3pCLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQztJQUV2QixJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsSUFBSSxVQUFVLEVBQUU7WUFDZCxZQUFZLEdBQUcsV0FBVyxDQUFDO1NBQzVCO2FBQU07WUFDTCxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO0tBQ0Y7U0FBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2xDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO1NBQU07UUFDTCxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFNBQVMsR0FBRyxLQUFLLENBQUM7S0FDbkI7SUFFRCxJQUFJLFlBQVksS0FBSyxJQUFJLEVBQUU7UUFDekIsWUFBWSxHQUFHLEtBQUssQ0FBQztLQUN0QjtTQUFNO1FBQ0wsWUFBWSxHQUFHLElBQUEsbURBQXdCLEVBQUM7WUFDdEMsUUFBUSxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2pDLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQLENBQUMsQ0FBQztLQUNKO0lBRUQsT0FBTyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUE3QlcsUUFBQSxjQUFjLGtCQTZCekIifQ==