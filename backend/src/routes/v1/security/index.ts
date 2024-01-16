
import { Router, Request, Response } from 'express';

const securityRouter = Router();

securityRouter
    .get('/test', (req: Request, res: Response) => {
        res.status(200).send('Bravo cousin!')
    });

securityRouter.route('/login')
    .post((req: Request, res: Response) => {

    });

export default securityRouter;