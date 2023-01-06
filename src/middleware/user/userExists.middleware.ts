import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { NextFunction, Request, Response } from "express";
import { User } from "../../entities/users.entity";

const userExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        email: req.body.email
    })

    if (user) {
        throw new AppError("email already exists", 409)
    }

    return next()

}

export default userExistsMiddleware