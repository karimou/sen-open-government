
import { Router, Request, Response } from 'express';

import { User } from '../../../models';

const securityRouter = Router();

securityRouter
    .get('/test', (req: Request, res: Response) => {
        res.status(200).send('Bravo cousin!')
    });

securityRouter
    .post('/login', async (req: Request, res: Response) => {
        console.log(req.session)
        let userData = await User.login(req.body)
            .catch(e => console.log(e));
        if (!userData) return res.status(401).send();
        req.session.user = userData;
        req.session.save();
        console.log(req.session)
        return res.status(200).send(userData);

    });

export default securityRouter;