
import { Router, Request, Response } from 'express';
import { isUserSigned } from '../../../middleware';

import { uploadMultipart } from '../../../services/s3';

import multer from 'multer';
const upload = multer()

const router = Router();

router.post('/upload', isUserSigned, upload.single('file'), async (req: Request, res: Response) => {
        console.log(req.file)
    });

export default router;