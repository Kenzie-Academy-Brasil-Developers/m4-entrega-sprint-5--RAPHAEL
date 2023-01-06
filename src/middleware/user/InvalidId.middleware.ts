import { NextFunction, Request, Response } from "express"
import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entity"
import { AppError } from "../../errors/appError"


const invalidIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id
    const userRepository = AppDataSource.getRepository(User)

    const findIdUser = await userRepository.findOneBy({
        id: id
    })

    if (!findIdUser) {
        throw new AppError("Invalid id", 404);
    }

    if (req.params.id.length < 36) {
        throw new AppError("Invalid id", 404);
    }


    return next()
}

export default invalidIdMiddleware