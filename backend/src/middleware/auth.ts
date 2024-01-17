
import { Request, Response, NextFunction } from "express"

export const isUserSigned = (req: Request, res: Response, next: NextFunction) => {
    if (req.session?.user?.id) {
        next();
    } else {
        res.status(401).send();
    }
};