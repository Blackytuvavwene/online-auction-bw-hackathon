"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payload = void 0;
const local_1 = __importDefault(require("./collections/operations/local"));
const local_2 = __importDefault(require("./globals/operations/local"));
const crypto_1 = require("./auth/crypto");
const init_1 = require("./init");
require('isomorphic-fetch');
/**
 * @description Payload
 */
class Payload {
    constructor() {
        this.collections = {};
        this.versions = {};
        this.encrypt = crypto_1.encrypt;
        this.decrypt = crypto_1.decrypt;
        this.Query = { name: 'Query', fields: {} };
        this.Mutation = { name: 'Mutation', fields: {} };
        this.errorResponses = [];
        this.getAdminURL = () => `${this.config.serverURL}${this.config.routes.admin}`;
        this.getAPIURL = () => `${this.config.serverURL}${this.config.routes.api}`;
        /**
         * @description Performs create operation
         * @param options
         * @returns created document
         */
        this.create = async (options) => {
            const { create } = local_1.default;
            return create(this, options);
        };
        /**
         * @description Find documents with criteria
         * @param options
         * @returns documents satisfying query
         */
        this.find = async (options) => {
            const { find } = local_1.default;
            return find(this, options);
        };
        this.findGlobal = async (options) => {
            const { findOne } = local_2.default;
            return findOne(this, options);
        };
        this.updateGlobal = async (options) => {
            const { update } = local_2.default;
            return update(this, options);
        };
        /**
         * @description Find global versions with criteria
         * @param options
         * @returns versions satisfying query
         */
        this.findGlobalVersions = async (options) => {
            const { findVersions } = local_2.default;
            return findVersions(this, options);
        };
        /**
         * @description Find global version by ID
         * @param options
         * @returns global version with specified ID
         */
        this.findGlobalVersionByID = async (options) => {
            const { findVersionByID } = local_2.default;
            return findVersionByID(this, options);
        };
        /**
         * @description Restore global version by ID
         * @param options
         * @returns version with specified ID
         */
        this.restoreGlobalVersion = async (options) => {
            const { restoreVersion } = local_2.default;
            return restoreVersion(this, options);
        };
        /**
         * @description Find document by ID
         * @param options
         * @returns document with specified ID
         */
        this.findByID = async (options) => {
            const { findByID } = local_1.default;
            return findByID(this, options);
        };
        /**
         * @description Update document
         * @param options
         * @returns Updated document
         */
        this.update = async (options) => {
            const { update } = local_1.default;
            return update(this, options);
        };
        this.delete = async (options) => {
            const { localDelete } = local_1.default;
            return localDelete(this, options);
        };
        /**
         * @description Find versions with criteria
         * @param options
         * @returns versions satisfying query
         */
        this.findVersions = async (options) => {
            const { findVersions } = local_1.default;
            return findVersions(this, options);
        };
        /**
         * @description Find version by ID
         * @param options
         * @returns version with specified ID
         */
        this.findVersionByID = async (options) => {
            const { findVersionByID } = local_1.default;
            return findVersionByID(this, options);
        };
        /**
         * @description Restore version by ID
         * @param options
         * @returns version with specified ID
         */
        this.restoreVersion = async (options) => {
            const { restoreVersion } = local_1.default;
            return restoreVersion(this, options);
        };
        this.login = async (options) => {
            const { login } = local_1.default.auth;
            return login(this, options);
        };
        this.forgotPassword = async (options) => {
            const { forgotPassword } = local_1.default.auth;
            return forgotPassword(this, options);
        };
        this.resetPassword = async (options) => {
            const { resetPassword } = local_1.default.auth;
            return resetPassword(this, options);
        };
        this.unlock = async (options) => {
            const { unlock } = local_1.default.auth;
            return unlock(this, options);
        };
        this.verifyEmail = async (options) => {
            const { verifyEmail } = local_1.default.auth;
            return verifyEmail(this, options);
        };
    }
    /**
     * @description Initializes Payload
     * @param options
     */
    init(options) {
        (0, init_1.initSync)(this, options);
    }
    async initAsync(options) {
        await (0, init_1.initAsync)(this, options);
    }
}
exports.Payload = Payload;
const payload = new Payload();
exports.default = payload;
module.exports = payload;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBbUJBLDJFQUE2RDtBQUM3RCx1RUFBK0Q7QUFDL0QsMENBQWlEO0FBeUJqRCxpQ0FBNkM7QUFFN0MsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFNUI7O0dBRUc7QUFDSCxNQUFhLE9BQU87SUFBcEI7UUFHRSxnQkFBVyxHQUVQLEVBQUUsQ0FBQTtRQUVOLGFBQVEsR0FFSixFQUFFLENBQUE7UUEwQk4sWUFBTyxHQUFHLGdCQUFPLENBQUM7UUFFbEIsWUFBTyxHQUFHLGdCQUFPLENBQUM7UUFhbEIsVUFBSyxHQUFxRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXhGLGFBQVEsR0FBcUQsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztRQVU5RixtQkFBYyxHQUE0QixFQUFFLENBQUM7UUFnQjdDLGdCQUFXLEdBQUcsR0FBVyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVsRixjQUFTLEdBQUcsR0FBVyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUU5RTs7OztXQUlHO1FBQ0gsV0FBTSxHQUFHLEtBQUssRUFBVyxPQUF5QixFQUFjLEVBQUU7WUFDaEUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLGVBQWUsQ0FBQztZQUNuQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFBO1FBRUQ7Ozs7V0FJRztRQUNILFNBQUksR0FB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