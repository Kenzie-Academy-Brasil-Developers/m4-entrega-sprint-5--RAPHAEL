import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/appError";

const compareAdminOrOwnerMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const isAdmin = req.body.isAdm
  const userId = req.body.id
  const active = req.body.isActive

  if (isAdmin !== undefined || userId !== undefined || active !== undefined) {
    throw new AppError('You don`t have permission', 401)
  }

  return next()

}

export default compareAdminOrOwnerMiddleware