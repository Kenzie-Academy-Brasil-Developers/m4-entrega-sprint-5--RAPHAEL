import { NextFunction, Request, Response } from "express";


const verifyIsAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const isAdmin = req.body.user.isAdm

    if (!isAdmin) {
        return res.status(403).send({ message: 'missing admin authorizations' })
    }

    return next()
}

export default verifyIsAdminMiddleware