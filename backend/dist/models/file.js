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
const fileQueries = (0, db_1.loadQueries)('files');
class MyFile {
    constructor(params, user) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }
    add() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: fileQueries.INSERT_FILE,
                values: [this.name, this.mime_type, this.url, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let file = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!file)
                throw (new Error('[file] creating obj failed'));
            this.id = file.id;
            this.last_modified_on = file.last_modified_on;
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: fileQueries.SELECT_ALL_FILES,
                values: []
            };
            let files = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!files)
                throw (new Error('[File] retrieving list failed'));
            return files.map(file => new MyFile(file, file.user));
        });
    }
}
exports.default = MyFile;
