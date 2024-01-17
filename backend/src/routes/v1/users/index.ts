
import { Router, Request, Response } from 'express';

import { User } from '../../../models';

const securityRouter = Router();

securityRouter
    .get('/test', (req: Request, res: Response) => {
        res.status(200).send('Bravo cousin!')
    });

securityRouter
    .post('/login', async (req: Request, res: Response) => {
        let user = await User.login(req.body)
            .catch(e => console.log(e));
        if (!user) return res.status(401).send();
        req.session.user = user;
        req.session.save();
        return res.status(200).send(user);
    });

securityRouter
    .get('/logout', async (req: Request, res: Response) => {
        req.session.destroy((err) => {});
        res.status(200).send();
    });



export default securityRouter;