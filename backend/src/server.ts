"use strict";

import express, { Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import { createClient } from 'redis';
import RedisStore from 'connect-redis';
import session from 'express-session';
import * as db from './db';

const app: Express = express();

const isLocal = (process.env.NODE_END == 'local');
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

let redisStore = new RedisStore({
  client: redisClient,
  prefix: "senopengov:"
});

if (!isLocal) app.set('trust proxy', 1);
app.use(session({
  store: redisStore,
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET as string,
  cookie: { secure: true}
}));

//-------------
// Check postgres connection is succesful
//-------
const dbClient = db.getClient();
db.query('SELECT NOW() AS "theTime"', [], (err, result) => {
  if (err) {
    console.log('[Postgres] Could not connect to database on startup');
  } else {
    console.log('[Postgres] connection successful', result.rows);
  }
});


//-------------
// Routes
//-------
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Dakar in Senegal, the city of typescript!')
});

//-------------
// Server start
//-------
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${ port }`);
});