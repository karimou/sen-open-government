
import { Router, Request, Response } from 'express';

import { User } from '../../../models';

import { isUserSigned } from '../../../middleware';

const router = Router();

router
    .post('/login', async (req: Request, res: Response) => {
        let user = new User(req.body);
        await user.login()
            .catch(e => console.log(e));
        if (!user.id) return res.status(401).send();
        req.session.user = user;
        req.session.save();
        return res.status(200).send(user);
    });

router
    .get('/logout', async (req: Request, res: Response) => {
        req.session.destroy((err) => {});
        res.status(200).send();
    });


router
    .get('/:userId', isUserSigned, async (req: Request, res: Response) => {
        try {
            
            let user = await User
                .getById(req.params.userId);
            res.status(200).send(user);

        } catch (e) {

            return res.status(500).send(e);
            
        }

    })

router.route('')
    .all(isUserSigned)
    .get(async (_req: Request, res: Response) => {

        try {
            
            let users = await User
                .list();
            res.status(200).send(users);

        } catch (e) {

            return res.status(500).send(e);

        }
        
    })
    .post(async (req: Request, res: Response) => {

        try {
            
            let user = new User(req.body, req.session?.user as User);
            await user.add();
            res.status(200).send(user);

        } catch (e) {

            return res.status(500).send(e);

        }
    })
    .put(async (req: Request, res: Response) => {

        try {

            let user = new User(req.body, req.session?.user as User);
            await user.update();
            res.status(200).send(user);

        } catch (e) {

            return res.status(500).send(e);

        }

    })
    .delete(async (req: Request, res: Response) => { 

        try {

            await User.delete(req.body.ids);
            res.status(200).send();

        } catch (e) {
            return res.status(500).send(e);
        }
    })


export default router;