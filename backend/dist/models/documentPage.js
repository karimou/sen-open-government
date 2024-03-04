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
const documentPageQueries = (0, db_1.loadQueries)('documentPages');
class DocumentPage {
    constructor(params, user) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }
    add() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: documentPageQueries.INSERT_DOCUMENT_PAGE,
                values: [this.title, this.summary, this.content, this.cover_image_url, this.capsule_url, this.parent_id, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let documentPage = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!documentPage)
                throw (new Error('[MyModel] retrieving obj failed'));
            this.id = documentPage.id;
            this.last_modified_on = documentPage.last_modified_on;
        });
    }
    update() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: documentPageQueries.UPDATE_DOCUMENT_PAGE,
                values: [this.id, this.title, this.summary, this.content, this.cover_image_url, this.capsule_url, this.parent_id, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let documentPage = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!documentPage)
                throw (new Error('[documentPage] update failed'));
            Object.assign(this, documentPage);
        });
    }
    static delete(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: documentPageQueries.DELETE_DOCUMENT_PAGES_BY_IDS,
                values: [ids]
            };
            let documentPages = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!documentPages)
                throw (new Error('[documentPage] documentPages deletion failed'));
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: documentPageQueries.GET_DOCUMENT_PAGE_BY_ID,
                values: [id]
            };
            let documentPage = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!documentPage)
                throw (new Error('[documentPage] retrieving documentPage failed'));
            return new DocumentPage(Object.assign({}, documentPage), documentPage.user);
        });
    }
    static getDocumentChildren(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: documentPageQueries.GET_DOCUMENT_PAGE_CHILDREN,
                values: [id]
            };
            let documentPages = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!documentPages)
                throw (new Error('[documentPage] retrieving documentPage children failed'));
            return documentPages.map(documentPage => new DocumentPage(documentPage, documentPage.user));
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: documentPageQueries.SELECT_ALL_ROOT_DOCUMENT_PAGES,
                values: []
            };
            let documentPages = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!documentPages)
                throw (new Error('[documentPage] retrieving list failed'));
            return documentPages.map(documentPage => new DocumentPage(documentPage, documentPage.user));
        });
    }
}
exports.default = DocumentPage;
