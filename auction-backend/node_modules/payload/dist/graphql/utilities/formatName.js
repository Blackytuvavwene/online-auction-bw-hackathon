"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const formatName = (string) => {
    let sanitizedString = String(string);
    const firstLetter = sanitizedString.substring(0, 1);
    if (numbers.indexOf(firstLetter) > -1) {
        sanitizedString = `_${sanitizedString}`;
    }
    const formatted = sanitizedString
        // Convert accented characters
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\./g, '_')
        .replace(/-|\//g, '_')
        .replace(/\+/g, '_')
        .replace(/,/g, '_')
        .replace(/\(/g, '_')
        .replace(/\)/g, '_')
        .replace(/'/g, '_')
        .replace(/ /g, '');
    return formatted || '_';
};
exports.default = formatName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0TmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy9mb3JtYXROYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUVuRSxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQWMsRUFBVSxFQUFFO0lBQzVDLElBQUksZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQyxNQUFNLFdBQVcsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVwRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDckMsZUFBZSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7S0FDekM7SUFFRCxNQUFNLFNBQVMsR0FBRyxlQUFlO1FBQy9CLDhCQUE4QjtTQUM3QixTQUFTLENBQUMsTUFBTSxDQUFDO1NBQ2pCLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7U0FFL0IsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7U0FDbkIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7U0FDckIsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7U0FDbkIsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7U0FDbEIsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7U0FDbkIsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7U0FDbkIsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUM7U0FDbEIsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVyQixPQUFPLFNBQVMsSUFBSSxHQUFHLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsVUFBVSxDQUFDIn0=