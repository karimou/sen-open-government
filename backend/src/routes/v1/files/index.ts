
import { Router, Request, Response } from 'express';
import { isUserSigned } from '../../../middleware';

import { uploadMultipart } from '../../../services/s3';


const router = Router();

router.route('')
    .all(isUserSigned)
    .post(async (req: Request, res: Response) => {

    });
