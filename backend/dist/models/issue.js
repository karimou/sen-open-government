"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../services/db");
const issueQueries = (0, db_1.loadQueries)('issues');
class Issue {
    constructor(params, user) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }
    add() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: issueQueries.INSERT_ISSUE,
                values: [this.title, this.short_description, this.long_description, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let issue = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!issue)
                throw (new Error('[issue] retrieving obj failed'));
            this.id = issue.id;
            this.last_modified_on = issue.last_modified_on;
        });
    }
    update() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: issueQueries.UPDATE_ISSUE,
                values: [this.id, this.title, this.short_description, this.long_description, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let issue = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!issue)
                throw (new Error('[Issue] update failed'));
            Object.assign(this, issue);
        });
    }
    static delete(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: issueQueries.DELETE_ISSUES_BY_IDS,
                values: [ids]
            };
            let issues = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!issues)
                throw (new Error('[Issue] issues deletion failed'));
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: issueQueries.GET_ISSUE_BY_ID,
                values: [id]
            };
            let issue = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!issue)
                throw (new Error('[Issue] retrieving Issue failed'));
            return new Issue(Object.assign({}, issue), issue.user);
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: issueQueries.SELECT_ALL_ISSUES,
                values: []
            };
            let issues = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!issues)
                throw (new Error('[Issue] retrieving list failed'));
            return issues.map(issue => new Issue(issue, issue.user));
        });
    }
}
exports.default = Issue;
