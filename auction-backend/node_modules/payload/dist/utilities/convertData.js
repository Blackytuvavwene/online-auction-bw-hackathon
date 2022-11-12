"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertArrayToObject = exports.convertObjectToArray = exports.convertArrayToHash = void 0;
const convertArrayToObject = (arr, key) => arr.reduce((obj, item) => {
    if (key) {
        obj[item[key]] = item;
        return obj;
    }
    obj[item] = {};
    return obj;
}, {});
exports.convertArrayToObject = convertArrayToObject;
const convertObjectToArray = (arr) => Object.values(arr);
exports.convertObjectToArray = convertObjectToArray;
const convertArrayToHash = (arr, key) => arr.reduce((obj, item, i) => {
    obj[item[key]] = i;
    return obj;
}, {});
exports.convertArrayToHash = convertArrayToHash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydERhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbGl0aWVzL2NvbnZlcnREYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ2xFLElBQUksR0FBRyxFQUFFO1FBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNmLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBWUwsb0RBQW9CO0FBVnRCLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFTdkQsb0RBQW9CO0FBUHRCLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNuRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBR0wsZ0RBQWtCIn0=