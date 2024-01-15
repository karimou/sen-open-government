"use strict";
import express, { Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import { createClient } from 'redis';
import RedisStore from 'connect-redis';
import session from 'express-session';

dotenv.config();

const app: Express = express();

//-------------
// Configure session management
//-------
let tlsSettings = (process.env.NODE_END == 'local') ? null : {tls: {rejectUnauthorized: false}};
let redisClient = createClient({
  url: process.env.REDIS_URL,
  ...tlsSettings
});

let redisStore = new RedisStore({
  client: redisClient,
  prefix: "senopengov:"
});

app.use(session({
  store: redisStore,
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET as string
}));
//-------------

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Dakar in Senegal, the city of typescript!')
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${ port }`);
});