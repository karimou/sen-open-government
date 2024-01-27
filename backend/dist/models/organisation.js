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
const organisationQueries = (0, db_1.loadQueries)('organisations');
class Organisation {
    constructor(params, user) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }
    add() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: organisationQueries.INSERT_ORGANISATION,
                values: [this.name, this.type, this.description, this.twitter, this.facebook, this.instagram, this.website, this.address, this.contact_phone, this.contact_email, this.parent_organisation_id, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let organisation = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!organisation)
                throw (new Error('[organisation] retrieving obj failed'));
            this.id = organisation.id;
            this.last_modified_on = organisation.last_modified_on;
        });
    }
    update() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: organisationQueries.UPDATE_ORGANISATION,
                values: [this.id, this.name, this.type, this.description, this.twitter, this.facebook, this.instagram, this.website, this.address, this.contact_phone, this.contact_email, this.parent_organisation_id, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let organisation = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!organisation)
                throw (new Error('[Organisation] update failed'));
            Object.assign(this, organisation);
        });
    }
    static delete(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: organisationQueries.DELETE_ORGANISATIONS_BY_IDS,
                values: [ids]
            };
            let organisations = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!organisations)
                throw (new Error('[Organisation] organisations deletion failed'));
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: organisationQueries.GET_ORGANISATION_BY_ID,
                values: [id]
            };
            let organisation = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!organisation)
                throw (new Error('[Organisation] retrieving Organisation failed'));
            return new Organisation(Object.assign({}, organisation), organisation.user);
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: organisationQueries.SELECT_ALL_ORGANISATIONS,
                values: []
            };
            let organisations = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!organisations)
                throw (new Error('[Organisation] retrieving list failed'));
            return organisations.map(organisation => new Organisation(organisation, organisation.user));
        });
    }
    static listPersonOrganisations(personId) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: organisationQueries.LIST_PERSON_ORGANISATIONS,
                values: [personId]
            };
            let organisations = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!organisations)
                throw (new Error('[Organisation] retrieving organisations list failed'));
            return organisations.map(organisation => new Organisation(organisation, organisation.user));
        });
    }
    static addMember(organisationId, personId, role, user) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: organisationQueries.ADD_ORGANISATION_MEMBER,
                values: [organisationId, personId, role, user === null || user === void 0 ? void 0 : user.id]
            };
            let organisationMember = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!organisationMember)
                throw (new Error('[Organisation] member addition failed'));
        });
    }
    static removeMember(organisationId, personId) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: organisationQueries.REMOVE_ORGANISATION_MEMBER,
                values: [organisationId, personId]
            };
            let id = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!id)
                throw (new Error('[Organisation] member removal failed'));
        });
    }
}
exports.default = Organisation;
