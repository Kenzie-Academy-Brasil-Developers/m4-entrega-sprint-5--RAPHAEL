import AppDataSource from "../../data-source"
import { Category } from "../../entities/categories.entity"

const listCategoriesPropertiesService = async (categoryId: string) => {
    const categoryRepository = AppDataSource.getRepository(Category)

    const category = await categoryRepository.findOne({
        where: {
            id: categoryId
        },
        relations: {
            properties: true
        }
    })

    return category
}

export default listCategoriesPropertiesService