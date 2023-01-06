import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";
import { ICategory } from "../../interfaces/categories";
import { returnCreateCategorySchema } from "../../schemas/createCategory.schema";

const createCategoriesService = async (categoryData: ICategory) => {

    const categoryRepository = AppDataSource.getRepository(Category)

    const newCategory = categoryRepository.create(categoryData)

    await categoryRepository.save(newCategory)

    const categoryValidated = await returnCreateCategorySchema.validate(newCategory, {
        stripUnknown: true
    })

    return categoryValidated
}

export default createCategoriesService