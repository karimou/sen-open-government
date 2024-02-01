
import { Router, Request, Response } from 'express';

import { Opinion, User } from '../../../models';

import { isUserSigned } from '../../../middleware';

const router = Router();

router
    .get('/:opinionId', async (req: Request, res: Response) => {
        try {
            
            let opinion = await Opinion
                .getById(req.params.opinionId);
            res.status(200).send(opinion);

        } catch (e) {

            return res.status(500).send(e);
            
        }

    })

router
    .get('/proposals/:opinionId', async (req: Request, res: Response) => {

        try {
            
            let proposals = await Opinion.listProposals(Number(req.params.opinionId));
            res.status(200).send(proposals);

        } catch (e) {

            return res.status(500).send(e);

        }
        
    })

router.route('/proposals')
    .all(isUserSigned)
    .post(async (req: Request, res: Response) => {

        try {
            
            await Opinion.addProposal(req.body.opinionId, req.body.number, req.body.content, req.session?.user as User);
            res.status(200).send();

        } catch (e) {

            return res.status(500).send(e);

        }
    })
    .put(async (req: Request, res: Response) => {

        try {
            
            await Opinion.updateProposal(req.body.id, req.body.number, req.body.content, req.session?.user as User);
            res.status(200).send();

        } catch (e) {

            return res.status(500).send(e);

        }
    })
    .delete(async (req: Request, res: Response) => { 
        try {

            await Opinion.deleteProposals(req.body.ids);
            res.status(200).send();

        } catch (e) {
            return res.status(500).send(e);
        }
    });

router.route('')
    .all(isUserSigned)
    .get(async (_req: Request, res: Response) => {

        try {
            
            let opinions = await Opinion
                .list();
            res.status(200).send(opinions);

        } catch (e) {

            return res.status(500).send(e);

        }
        
    })
    .post(async (req: Request, res: Response) => {

        try {
            
            let opinion = new Opinion(req.body, req.session?.user as User);
            await opinion.add();
            res.status(200).send(opinion);

        } catch (e) {

            return res.status(500).send(e);

        }
    })
    .put(async (req: Request, res: Response) => {

        try {

            let opinion = new Opinion(req.body, req.session?.user as User);
            await opinion.update();
            res.status(200).send(opinion);

        } catch (e) {

            return res.status(500).send(e);

        }

    })
    .delete(async (req: Request, res: Response) => { 

        try {

            await Opinion.delete(req.body.ids);
            res.status(200).send();

        } catch (e) {
            return res.status(500).send(e);
        }
    })


export default router;