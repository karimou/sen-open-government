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
const opinionQueries = (0, db_1.loadQueries)('opinions');
class Opinion {
    constructor(params, user) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }
    add() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: opinionQueries.INSERT_OPINION,
                values: [this.author_id, this.issue_id, this.summary, this.content, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let opinion = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!opinion)
                throw (new Error('[opinion] retrieving obj failed'));
            this.id = opinion.id;
            this.last_modified_on = opinion.last_modified_on;
        });
    }
    update() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: opinionQueries.UPDATE_OPINION,
                values: [this.id, this.author_id, this.issue_id, this.summary, this.content, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let opinion = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!opinion)
                throw (new Error('[Opinion] update failed'));
            Object.assign(this, opinion);
        });
    }
    static delete(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: opinionQueries.DELETE_OPINIONS_BY_IDS,
                values: [ids]
            };
            let opinions = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!opinions)
                throw (new Error('[Opinion] opinions deletion failed'));
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: opinionQueries.GET_OPINION_BY_ID,
                values: [id]
            };
            let opinion = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!opinion)
                throw (new Error('[Opinion] retrieving Opinion failed'));
            return new Opinion(Object.assign({}, opinion), opinion.user);
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: opinionQueries.SELECT_ALL_OPINIONS,
                values: []
            };
            let opinions = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!opinions)
                throw (new Error('[Opinion] retrieving list failed'));
            return opinions.map(opinion => new Opinion(opinion, opinion.user));
        });
    }
    static listOpinionsByElection(electionId) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: opinionQueries.LIST_OPINIONS_BY_ELECTION,
                values: [electionId]
            };
            let opinions = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!opinions)
                throw (new Error('[opinion] retrieving opinions list failed'));
            return opinions.map(opinion => new Opinion(opinion, opinion.user));
        });
    }
}
exports.default = Opinion;
