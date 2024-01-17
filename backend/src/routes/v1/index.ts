
import { Router } from 'express';
import usersRouter from './users';
import electionsRouter from './elections';

const v1Router = Router();

v1Router.use('/users', usersRouter);
v1Router.use('/elections', electionsRouter);

export default v1Router;
