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
const personQueries = (0, db_1.loadQueries)('persons');
class Person {
    constructor(params, user) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }
    add() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: personQueries.INSERT_PERSON,
                values: [this.firstname, this.lastname, this.gender, this.date_of_birth, this.description, this.facebook, this.instagram, this.twitter, this.website, this.photo, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let person = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!person)
                throw (new Error('[person] retrieving obj failed'));
            this.id = person.id;
            this.last_modified_on = person.last_modified_on;
        });
    }
    update() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: personQueries.UPDATE_PERSON,
                values: [this.id, this.firstname, this.lastname, this.gender, this.date_of_birth, this.description, this.facebook, this.instagram, this.twitter, this.website, this.photo, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let person = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!person)
                throw (new Error('[person] update failed'));
            Object.assign(this, person);
        });
    }
    static delete(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: personQueries.DELETE_PERSONS_BY_IDS,
                values: [ids]
            };
            let persons = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!persons)
                throw (new Error('[person] persons deletion failed'));
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: personQueries.GET_PERSON_BY_ID,
                values: [id]
            };
            let person = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!person)
                throw (new Error('[person] retrieving person failed'));
            return new Person(Object.assign({}, person), person.user);
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: personQueries.SELECT_ALL_PERSONS,
                values: []
            };
            let persons = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!persons)
                throw (new Error('[person] retrieving list failed'));
            return persons.map(person => new Person(person, person.user));
        });
    }
    static listElectionCandidates(electionId) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: personQueries.LIST_ELECTION_CANDIDATES,
                values: [electionId]
            };
            let persons = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!persons)
                throw (new Error('[person] retrieving persons list failed'));
            return persons.map(person => new Person(person, person.user));
        });
    }
    static listOrganisationMembers(organisationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: personQueries.LIST_ORGANISATION_MEMBERS,
                values: [organisationId]
            };
            let persons = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!persons)
                throw (new Error('[person] retrieving persons list failed'));
            return persons.map(person => new Person(person, person.user));
        });
    }
    addElection(electionId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: personQueries.ADD_ELECTION,
                values: [this.id, electionId, user === null || user === void 0 ? void 0 : user.id]
            };
            let electionCandidate = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!electionCandidate)
                throw (new Error('[Person] candidate addition failed'));
        });
    }
}
exports.default = Person;
