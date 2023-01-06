import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";

const invalidIdCategoryMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const id = req.params.id
    const categoryRepository = AppDataSource.getRepository(Category)

    const findIdCategory = await categoryRepository.findOneBy({
        id: id
    })

    if (!findIdCategory) {
        throw new AppError("Invalid id", 404);
    }

    if (id.length < 36) {
        throw new AppError("Invalid id", 404);
    }

    return next()
}

export default invalidIdCategoryMiddleware