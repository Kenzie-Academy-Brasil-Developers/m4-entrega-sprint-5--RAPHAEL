import { Request, Response } from "express";
import { ICategory } from "../interfaces/categories";
import createCategoriesService from "../service/category/createCategory.service";
import listAllCategoriesServices from "../service/category/listAllCtaegories.service";
import listCategoriesPropertiesService from "../service/category/listCategoriesProperties.service";

const createCategoriesController = async (req: Request, res: Response) => {
    const categoryData: ICategory = req.body
    const newCategory = await createCategoriesService(categoryData)
    return res.status(201).send(newCategory)
}

const listAllCategoriesController = async (req: Request, res: Response) => {
    const listCategories = await listAllCategoriesServices()
    return res.send(listCategories)
}

const listCategoriesPropertiesController = async (req: Request, res: Response) => {
    const categoryId: string = req.params.id
    const listAllCategoryProperties = await listCategoriesPropertiesService(categoryId)
    return res.status(200).send(listAllCategoryProperties)
}

export { createCategoriesController, listAllCategoriesController, listCategoriesPropertiesController }