"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapAsync = void 0;
async function mapAsync(arr, callbackfn) {
    return Promise.all(arr.map(callbackfn));
}
exports.mapAsync = mapAsync;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwQXN5bmMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbGl0aWVzL21hcEFzeW5jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLEtBQUssVUFBVSxRQUFRLENBQzVCLEdBQVEsRUFDUixVQUE4RDtJQUU5RCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFMRCw0QkFLQyJ9