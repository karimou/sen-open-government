
import { Router, Request, Response } from 'express';
import securityRouter from './security';

const v1Router = Router();

v1Router.use('/security', securityRouter)

export default v1Router;
