"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const minimist_1 = __importDefault(require("minimist"));
const generateTypes_1 = require("./generateTypes");
const generateGraphQLSchema_1 = require("./generateGraphQLSchema");
const babel_config_1 = __importDefault(require("../babel.config"));
require('@babel/register')({
    ...babel_config_1.default,
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
});
const { build } = require('./build');
const args = (0, minimist_1.default)(process.argv.slice(2));
const scriptIndex = args._.findIndex((x) => x === 'build');
const script = scriptIndex === -1 ? args._[0] : args._[scriptIndex];
switch (script.toLowerCase()) {
    case 'build': {
        build();
        break;
    }
    case 'generate:types': {
        (0, generateTypes_1.generateTypes)();
        break;
    }
    case 'generate:graphqlschema': {
        (0, generateGraphQLSchema_1.generateGraphQLSchema)();
        break;
    }
    default:
        console.log(`Unknown script "${script}".`);
        break;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYmluL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdURBQXVEO0FBQ3ZELHdEQUFnQztBQUNoQyxtREFBZ0Q7QUFDaEQsbUVBQWdFO0FBQ2hFLG1FQUEwQztBQUUxQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN6QixHQUFHLHNCQUFXO0lBQ2QsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO0NBQzNDLENBQUMsQ0FBQztBQUVILE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFckMsTUFBTSxJQUFJLEdBQUcsSUFBQSxrQkFBUSxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFN0MsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ2xDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssT0FBTyxDQUNyQixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRXBFLFFBQVEsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFO0lBQzVCLEtBQUssT0FBTyxDQUFDLENBQUM7UUFDWixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU07S0FDUDtJQUVELEtBQUssZ0JBQWdCLENBQUMsQ0FBQztRQUNyQixJQUFBLDZCQUFhLEdBQUUsQ0FBQztRQUNoQixNQUFNO0tBQ1A7SUFFRCxLQUFLLHdCQUF3QixDQUFDLENBQUM7UUFDN0IsSUFBQSw2Q0FBcUIsR0FBRSxDQUFDO1FBQ3hCLE1BQU07S0FDUDtJQUVEO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUMzQyxNQUFNO0NBQ1QifQ==