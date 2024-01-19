"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const redis_1 = require("redis");
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_session_1 = __importDefault(require("express-session"));
const db = __importStar(require("./services/db"));
const node_fs_1 = require("node:fs");
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
//-------------
// Update size limit of incoming requests 
//-------
app.use(express_1.default.json({ limit: '50mb' }));
app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
//-------------
// Vars
//-------
const isLocal = (process.env.NODE_END == 'local');
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;
//-------------
// Load env variables
//-------
dotenv_1.default.config();
//-------------
// Session management
//-------
let tlsSettings = isLocal ? null : { tls: { rejectUnauthorized: false } };
let redisClient = (0, redis_1.createClient)(Object.assign({ url: process.env.REDIS_TLS_URL }, tlsSettings));
redisClient.on('connect', () => {
    console.log('[Redis] Connected to redis successfully');
});
redisClient.on('error', (e) => {
    console.log('[Redis] Error', e);
});
(() => __awaiter(void 0, void 0, void 0, function* () { return yield redisClient.connect(); }))();
let redisStore = new connect_redis_1.default({
    client: redisClient
});
if (!isLocal)
    app.set('trust proxy', 1);
app.use((0, express_session_1.default)({
    store: redisStore,
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
}));
//-------------
// Check postgres connection is succesful
//-------
db.query('SELECT NOW() AS "theTime"', [], (err, result) => {
    var _a;
    if (err) {
        console.log('[Postgres] Could not connect to database on startup');
    }
    else {
        console.log(`[Postgres] connection successful: ${(_a = result.rows[0]) === null || _a === void 0 ? void 0 : _a.theTime}`);
    }
});
//-------------
// Configure static files pages for each separate VueJS app served
//-------
app.use(`/assets`, express_1.default.static(path_1.default.join(`${__dirname}/../../frontend/admin/dist/assets`), { maxAge: `${ONE_WEEK}` }));
app.use(`/assets`, express_1.default.static(path_1.default.join(`${__dirname}/../../frontend/website/dist/assets`), { maxAge: `${ONE_WEEK}` }));
//-------------
// CORS
//-------
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
//-------------
// Api
//-------
(0, routes_1.default)(app);
//-------------
// Main Routes
//-------
const adminHtml = (0, node_fs_1.readFileSync)(path_1.default.join(`${__dirname}/../../frontend/admin/dist/index.html`), 'utf8');
const getAdminPage = (req, res) => res.send(adminHtml);
app.get('/admin', getAdminPage);
app.get('/admin/*', getAdminPage);
app.get('/', (req, res) => {
    res.send('Welcome to Dakar in Senegal, the city of typescript!');
});
//-------------
// Server start
//-------
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
