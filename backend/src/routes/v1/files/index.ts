
import { Router, Request, Response } from 'express';
import { isUserSigned } from '../../../middleware';

import { uploadMultipart } from '../../../services/s3';

import multer from 'multer';
import { MyFile, User } from '../../../models';

const upload = multer()

const router = Router();

router
    .post('/upload', isUserSigned, upload.single('file'), async (req: Request, res: Response) => {
        
        if (!req.file) res.status(500).send('No file provided');

        let upload = await uploadMultipart(req.file?.originalname, req.file?.buffer);
        let params = {
            name: req.file?.originalname,
            mime_type: req.file?.mimetype,
            url: upload?.Location, 
        };
        let file = new MyFile(params, req.session?.user as User);
        await file.add();

        if (!file.id) res.status(500).send('File could not be added to database');
        
        res.status(200).send(file);
    });

export default router;