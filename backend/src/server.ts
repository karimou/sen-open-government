"use strict";

import express, { Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import { createClient } from 'redis';
import RedisStore from 'connect-redis';

import session from 'express-session';
declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
  }
}

import * as db from './services/db';
import { readFileSync } from 'node:fs';
import path from 'path';
import apiRoutes from './routes';

const app: Express = express();
app.use(express.json())

//-------------
// Vars
//-------
const isLocal = (process.env.NODE_END == 'local');
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

//-------------
// Load env variables
//-------
dotenv.config();

//-------------
// Session management
//-------
let tlsSettings = isLocal ? null : {tls: {rejectUnauthorized: false}};
let redisClient = createClient({
  url: process.env.REDIS_URL,
  ...tlsSettings
});

redisClient.on('connect', () => {
  console.log('[Redis] Connected to redis successfully');
});

redisClient.on('error', (e) => {
  console.log('[Redis] Error', e);
});

(async () => await redisClient.connect())();

let redisStore = new RedisStore({
  client: redisClient
});

if (!isLocal) app.set('trust proxy', 1);
app.use(session({
  store: redisStore,
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET as string
}));

//-------------
// Check postgres connection is succesful
//-------

db.query('SELECT NOW() AS "theTime"', [], (err, result) => {
  if (err) {
    console.log('[Postgres] Could not connect to database on startup');
  } else {
    console.log(`[Postgres] connection successful: ${ result.rows[0]?.theTime }`);
  }
});


//-------------
// Configure static files pages for each separate VueJS app served
//-------


app.use(`/assets`, express.static(path.join(`${ __dirname }/../../frontend/admin/dist/assets`), {maxAge: `${ ONE_WEEK }`}));
app.use(`/assets`, express.static(path.join(`${ __dirname }/../../frontend/website/dist/assets`), {maxAge: `${ ONE_WEEK }`}));


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
apiRoutes(app);

//-------------
// Main Routes
//-------
const adminHtml = readFileSync(path.join(`${ __dirname }/../../frontend/admin/dist/index.html`), 'utf8');
const getAdminPage = (req: Request, res: Response) => res.send(adminHtml);

app.get('/admin', getAdminPage);
app.get('/admin/*', getAdminPage);
app.get('/', (req: Request, res: Response) => {
  console.log(req.session);
  res.send('Welcome to Dakar in Senegal, the city of typescript!')
});

//-------------
// Server start
//-------
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${ port }`);
});