
import { Router } from 'express';
import usersRouter from './users';
import electionsRouter from './elections';
import organisationsRouter from './organisations';

const v1Router = Router();

v1Router.use('/users', usersRouter);
v1Router.use('/elections', electionsRouter);
v1Router.use('/organisations', organisationsRouter);

export default v1Router;
