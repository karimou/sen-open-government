
import { Router, Request, Response } from 'express';
import { DocumentPage, User } from '../../../models';
import { isUserSigned } from '../../../middleware';

const router = Router();

router
    .get('/:documentPageId', async (req: Request, res: Response) => {
        try {
            
            let documentPage = await DocumentPage
                .getById(req.params.documentPageId);
            if (!documentPage) return res.status(404).send();
            let children = await DocumentPage.getDocumentChildren(documentPage.id);
            res.status(200).send({ ...documentPage, children });

        } catch (e) {
            return res.status(500).send(e);
            
        }

    });

router
    .get('', async (_req: Request, res: Response) => {

        try {
            
            let documentPages = await DocumentPage
                .list();
            res.status(200).send(documentPages);

        } catch (e) {

            return res.status(500).send(e);

        }
        
    });

router.route('')
    .all(isUserSigned)
    .post(async (req: Request, res: Response) => {

        try {
            
            let documentPage = new DocumentPage(req.body, req.session?.user as User);
            await documentPage.add();
            res.status(200).send(documentPage);

        } catch (e) {

            return res.status(500).send(e);

        }
    })
    .put(async (req: Request, res: Response) => {

        try {

            let documentPage = new DocumentPage(req.body, req.session?.user as User);
            await documentPage.update();
            res.status(200).send(documentPage);

        } catch (e) {

            return res.status(500).send(e);

        }

    })
    .delete(async (req: Request, res: Response) => { 

        try {
            await DocumentPage.delete(req.body.ids);
            res.status(200).send();

        } catch (e) {
            return res.status(500).send(e);
        }
    });



export default router;