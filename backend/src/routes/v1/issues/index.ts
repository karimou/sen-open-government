
import { Router, Request, Response } from 'express';

import { Issue, User } from '../../../models';

import { isUserSigned } from '../../../middleware';

const router = Router();

router
    .get('/:issueId', isUserSigned, async (req: Request, res: Response) => {
        try {
            
            let issue = await Issue
                .getById(req.params.issueId);
            res.status(200).send(issue);

        } catch (e) {

            return res.status(500).send(e);
            
        }

    })

router.route('')
    .all(isUserSigned)
    .get(async (_req: Request, res: Response) => {

        try {
            
            let issues = await Issue
                .list();
            res.status(200).send(issues);

        } catch (e) {

            return res.status(500).send(e);

        }
        
    })
    .post(async (req: Request, res: Response) => {

        try {
            
            let issue = new Issue(req.body, req.session?.user as User);
            await issue.add();
            res.status(200).send(issue);

        } catch (e) {

            return res.status(500).send(e);

        }
    })
    .put(async (req: Request, res: Response) => {

        try {

            let issue = new Issue(req.body, req.session?.user as User);
            await issue.update();
            res.status(200).send(issue);

        } catch (e) {

            return res.status(500).send(e);

        }

    })
    .delete(async (req: Request, res: Response) => { 

        try {

            await Issue.delete(req.body.ids);
            res.status(200).send();

        } catch (e) {
            return res.status(500).send(e);
        }
    })


export default router;