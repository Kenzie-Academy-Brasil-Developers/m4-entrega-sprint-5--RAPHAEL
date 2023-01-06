import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";

const verifyCategoryExists =async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const categoryRepository = AppDataSource.getRepository(Category)

    const category = await categoryRepository.findOneBy({
        name: req.body.name
    })

    if(category) {
        throw new AppError("category already exists", 409)
    }

    return next()
}

export default verifyCategoryExists