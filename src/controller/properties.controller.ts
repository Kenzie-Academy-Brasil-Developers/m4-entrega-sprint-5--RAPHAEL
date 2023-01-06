import { Request, Response } from "express";
import { IPropertyRequest } from "../interfaces/properties";

import createPropertyService from "../service/properties/createProperty.service";
import listAllPropertiesService from "../service/properties/listAllProperties.service";

const createPropertyController = async (req: Request, res: Response) => {
    const propertyData: IPropertyRequest = req.body
    const newProperty = await createPropertyService(propertyData)
    return res.status(201).send(newProperty)
}

const listAllPropertiesController = async (req: Request, res: Response) => {
    const listProperties = await listAllPropertiesService()
    return res.send(listProperties)
}

export { createPropertyController, listAllPropertiesController}