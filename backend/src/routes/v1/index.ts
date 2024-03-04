
import { Router } from 'express';
import usersRouter from './users';
import electionsRouter from './elections';
import organisationsRouter from './organisations';
import personsRouter from './persons';
import issuesRouter from './issues';
import opinionsRouter from './opinions';
import filesRouter from './files';
import documentPagesRouter from './documentPages';

const v1Router = Router();

v1Router.use('/users', usersRouter);
v1Router.use('/elections', electionsRouter);
v1Router.use('/organisations', organisationsRouter);
v1Router.use('/persons', personsRouter);
v1Router.use('/issues', issuesRouter);
v1Router.use('/opinions', opinionsRouter);
v1Router.use('/files', filesRouter);
v1Router.use('/document-pages', documentPagesRouter);

export default v1Router;
