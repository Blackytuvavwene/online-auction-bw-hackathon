"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bindCollectionMiddleware = (collection) => (req, res, next) => {
    req.collection = collection;
    next();
};
exports.default = bindCollectionMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZENvbGxlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29sbGVjdGlvbnMvYmluZENvbGxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFNLHdCQUF3QixHQUFHLENBQUMsVUFBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUF5QyxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFRLEVBQUU7SUFDbEosR0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDNUIsSUFBSSxFQUFFLENBQUM7QUFDVCxDQUFDLENBQUM7QUFFRixrQkFBZSx3QkFBd0IsQ0FBQyJ9