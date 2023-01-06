import AppDataSource from "../../data-source"
import { Category } from "../../entities/categories.entity"
import { ICategory } from "../../interfaces/categories"
import { listAllCategoriesSchema } from "../../schemas/createCategory.schema"

const listAllCategoriesServices = async (): Promise<ICategory[]> => {
    const categoryRepository = AppDataSource.getRepository(Category)

    const allcategories = await categoryRepository.find()

    const allcategoriesValidated = await listAllCategoriesSchema.validate(allcategories, {
        stripUnknown: true
    })

    return allcategoriesValidated
}

export default listAllCategoriesServices