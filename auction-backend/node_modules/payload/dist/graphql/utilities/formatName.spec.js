"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable indent */
/* eslint-disable jest/prefer-strict-equal */
const formatName_1 = __importDefault(require("./formatName"));
describe('formatName', () => {
    it.each `
    char   | expected
    ${'á'} | ${'a'}
    ${'è'} | ${'e'}
    ${'í'} | ${'i'}
    ${'ó'} | ${'o'}
    ${'ú'} | ${'u'}
    ${'ñ'} | ${'n'}
    ${'ü'} | ${'u'}
  `('should convert accented character: $char', ({ char, expected }) => {
        expect((0, formatName_1.default)(char)).toEqual(expected);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0TmFtZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2dyYXBocWwvdXRpbGl0aWVzL2Zvcm1hdE5hbWUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJCQUEyQjtBQUMzQiw2Q0FBNkM7QUFDN0MsOERBQXNDO0FBRXRDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxJQUFJLENBQUE7O01BRUgsR0FBRyxNQUFNLEdBQUc7TUFDWixHQUFHLE1BQU0sR0FBRztNQUNaLEdBQUcsTUFBTSxHQUFHO01BQ1osR0FBRyxNQUFNLEdBQUc7TUFDWixHQUFHLE1BQU0sR0FBRztNQUNaLEdBQUcsTUFBTSxHQUFHO01BQ1osR0FBRyxNQUFNLEdBQUc7R0FDZixDQUFDLDBDQUEwQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtRQUNuRSxNQUFNLENBQUMsSUFBQSxvQkFBVSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==