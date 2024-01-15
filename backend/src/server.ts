"use strict";
import express, { Express, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Dakar in Senegal, the city of typescript!')
});

app.listen(port, () => {
  console.log(`Server started on port ${ port }`);
});