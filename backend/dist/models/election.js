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
const electionQueries = (0, db_1.loadQueries)('elections');
class Election {
    constructor(params, user) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }
    add() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: electionQueries.INSERT_ELECTION,
                values: [this.date, this.title, this.type, this.description, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let election = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!election)
                throw (new Error('[MyModel] retrieving obj failed'));
            this.id = election.id;
            this.last_modified_on = election.last_modified_on;
        });
    }
    update() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: electionQueries.UPDATE_ELECTION,
                values: [this.id, this.date, this.title, this.type, this.description, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let election = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!election)
                throw (new Error('[Election] update failed'));
            Object.assign(this, election);
        });
    }
    static delete(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: electionQueries.DELETE_ELECTIONS_BY_IDS,
                values: [ids]
            };
            let elections = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!elections)
                throw (new Error('[Election] elections deletion failed'));
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: electionQueries.GET_ELECTION_BY_ID,
                values: [id]
            };
            let election = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!election)
                throw (new Error('[Election] retrieving election failed'));
            return new Election(Object.assign({}, election), election.user);
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: electionQueries.SELECT_ALL_ELECTIONS,
                values: []
            };
            let elections = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!elections)
                throw (new Error('[Election] retrieving list failed'));
            return elections.map(election => new Election(election, election.user));
        });
    }
}
exports.default = Election;
