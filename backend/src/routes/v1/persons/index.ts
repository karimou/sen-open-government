
import { Router, Request, Response } from 'express';

import { Person, User } from '../../../models';

import { isUserSigned } from '../../../middleware';

const router = Router();

router
    .get('/:personId', isUserSigned, async (req: Request, res: Response) => {
        try {
            
            let person = await Person
                .getById(req.params.personId);
            res.status(200).send(person);

        } catch (e) {

            return res.status(500).send(e);
            
        }

    })

router.route('')
    .all(isUserSigned)
    .get(async (_req: Request, res: Response) => {

        try {
            
            let persons = await Person
                .list();
            res.status(200).send(persons);

        } catch (e) {

            return res.status(500).send(e);

        }
        
    })
    .post(async (req: Request, res: Response) => {

        try {
            
            let person = new Person(req.body, req.session?.user as User);
            await person.add();
            res.status(200).send(person);

        } catch (e) {

            return res.status(500).send(e);

        }
    })
    .put(async (req: Request, res: Response) => {

        try {

            let person = new Person(req.body, req.session?.user as User);
            await person.update();
            res.status(200).send(person);

        } catch (e) {

            return res.status(500).send(e);

        }

    })
    .delete(async (req: Request, res: Response) => { 

        try {

            await Person.delete(req.body.ids);
            res.status(200).send();

        } catch (e) {
            return res.status(500).send(e);
        }
    })


export default router;