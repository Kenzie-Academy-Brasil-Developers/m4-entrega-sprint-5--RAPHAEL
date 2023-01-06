import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

const invalidIdScheduleMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.body.propertyId
    const propertyRepository = AppDataSource.getRepository(Property)

    if (id.length < 36) {
        throw new AppError("Invalid id", 404);
    }

    const findIdProperty = await propertyRepository.findOneBy({
        id: id
    })

    if (!findIdProperty) {
        throw new AppError("Invalid id", 404);
    }

    return next()
}

export default invalidIdScheduleMiddleware