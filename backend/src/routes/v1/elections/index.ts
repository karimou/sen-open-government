
import { Router, Request, Response, response } from 'express';

import { Election, User } from '../../../models';

import { isUserSigned } from '../../../middleware';

const router = Router();

router
    .get('/:electionId', isUserSigned, async (req: Request, res: Response) => {
        try {
            
            let election = await Election
                .getById(req.params.electionId);
            res.status(200).send(election);

        } catch (e) {

            return res.status(500).send(e);
            
        }

    })

router.route('')
    .all(isUserSigned)
    .get(async (_req: Request, res: Response) => {

        try {
            
            let elections = await Election
                .list();
            res.status(200).send(elections);

        } catch (e) {

            return res.status(500).send(e);

        }
        
    })
    .post(async (req: Request, res: Response) => {

        try {
            
            let election = new Election(req.body, req.session?.user as User);
            await election.add();
            res.status(200).send(election);

        } catch (e) {

            return res.status(500).send(e);

        }
    })
    .put(async (req: Request, res: Response) => {

        try {

            let election = new Election(req.body, req.session?.user as User);
            await election.update();
            res.status(200).send(election);

        } catch (e) {

            return res.status(500).send(e);

        }

    })
    .delete(async (req: Request, res: Response) => { 

        try {

            await Election
                .delete(req.body.ids);

        } catch (e) {
            return res.status(500).send(e);
        }
    })


export default router;