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
exports.loadQueries = exports.getClient = exports.query = void 0;
const pg_1 = require("pg");
const node_fs_1 = __importDefault(require("node:fs"));
const path_1 = __importDefault(require("path"));
var getConfig = () => {
    if (process.env.NODE_ENV === 'local') {
        return {
            database: process.env.DATABASE_NAME,
            max: process.env.DEFAULT_MAX_DB_CONN_PER_WORKER,
        };
    }
    else {
        return {
            connectionString: process.env.DATABASE_URL,
            ssl: true,
            max: process.env.DEFAULT_MAX_DB_CONN_PER_WORKER,
        };
    }
};
var pool;
const query = (text, params, callback) => {
    if (!pool)
        pool = new pg_1.Pool(getConfig());
    if (callback) {
        return pool.query(text, params, callback);
    }
    else {
        return pool.query(text, params);
    }
};
exports.query = query;
const getClient = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!pool)
        pool = new pg_1.Pool(getConfig());
    return yield pool.connect();
});
exports.getClient = getClient;
const loadQueries = (folderName) => {
    const Queries = {};
    const folderPath = `${__dirname}/../../../sql/${folderName}/`;
    node_fs_1.default.readdirSync(folderPath).forEach(fileName => {
        let queryName;
        if (fileName.endsWith(".sql")) {
            queryName = fileName.replace('.sql', '');
            Queries[queryName] = node_fs_1.default.readFileSync(path_1.default.join(folderPath + fileName), 'utf8');
        }
        else if (fileName.endsWith(".js")) {
            queryName = fileName.replace('.js', '');
            Queries[queryName] = require(folderPath + fileName);
        }
    });
    return Queries;
};
exports.loadQueries = loadQueries;
