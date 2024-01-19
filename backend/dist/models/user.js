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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../services/db");
const crypto_1 = __importDefault(require("crypto"));
const userQueries = (0, db_1.loadQueries)('users');
;
class User {
    constructor(params, user) {
        Object.assign(this, params);
        this.last_modified_by = user;
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let passwordHash = crypto_1.default.createHash('md5').update(this.password).digest('hex');
            let query = {
                text: userQueries.LOGIN,
                values: [this.email, passwordHash]
            };
            let user = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!user)
                throw (new Error('Incorrect credentials'));
            this.id = user.id;
            this.username = user.username;
            this.password = null;
        });
    }
    add() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let passwordHash = crypto_1.default.createHash('md5').update(this.password).digest('hex');
            let query = {
                text: userQueries.INSERT_USER,
                values: [this.username, this.email, this.phone, passwordHash, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let user = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!user)
                throw (new Error('[user] retrieving obj failed'));
            this.id = user.id;
            this.last_modified_on = user.last_modified_on;
        });
    }
    update() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: userQueries.UPDATE_USER,
                values: [this.id, this.username, this.email, this.phone, (_a = this.last_modified_by) === null || _a === void 0 ? void 0 : _a.id]
            };
            let user = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!user)
                throw (new Error('[user] update failed'));
            Object.assign(this, user);
        });
    }
    static delete(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: userQueries.DELETE_USERS_BY_IDS,
                values: [ids]
            };
            let users = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!users)
                throw (new Error('[user] users deletion failed'));
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: userQueries.GET_USER_BY_ID,
                values: [id]
            };
            let user = yield client.query(query)
                .then(res => res.rows[0])
                .catch(e => console.log(e));
            client.release();
            if (!user)
                throw (new Error('[user] retrieving user failed'));
            return new User(Object.assign({}, user), user.user);
        });
    }
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield (0, db_1.getClient)();
            let query = {
                text: userQueries.SELECT_ALL_USERS,
                values: []
            };
            let users = yield client.query(query)
                .then(res => res.rows)
                .catch(e => console.log(e));
            client.release();
            if (!users)
                throw (new Error('[user] retrieving list failed'));
            return users.map(user => new User(user, user.user));
        });
    }
}
;
exports.default = User;
