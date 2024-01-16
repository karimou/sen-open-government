
import { Router, Request, Response } from 'express';
import usersRouter from './users';

const v1Router = Router();

v1Router.use('/users', usersRouter)

export default v1Router;
