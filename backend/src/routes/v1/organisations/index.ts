
import { Router, Request, Response } from 'express';

import { Organisation, User } from '../../../models';

import { isUserSigned } from '../../../middleware';

const router = Router();

router
    .get('/:organisationId', isUserSigned, async (req: Request, res: Response) => {
        try {
            
            let organisation = await Organisation
                .getById(req.params.organisationId);
            res.status(200).send(organisation);

        } catch (e) {

            return res.status(500).send(e);
            
        }

    })

router.route('')
    .all(isUserSigned)
    .get(async (_req: Request, res: Response) => {

        try {
            
            let organisations = await Organisation
                .list();
            res.status(200).send(organisations);

        } catch (e) {

            return res.status(500).send(e);

        }
        
    })
    .post(async (req: Request, res: Response) => {

        try {
            
            let organisation = new Organisation(req.body, req.session?.user as User);
            await organisation.add();
            res.status(200).send(organisation);

        } catch (e) {

            return res.status(500).send(e);

        }
    })
    .put(async (req: Request, res: Response) => {

        try {

            let organisation = new Organisation(req.body, req.session?.user as User);
            await organisation.update();
            res.status(200).send(organisation);

        } catch (e) {

            return res.status(500).send(e);

        }

    })
    .delete(async (req: Request, res: Response) => { 

        try {

            await Organisation
                .delete(req.body.ids);

        } catch (e) {
            return res.status(500).send(e);
        }
    })


export default router;