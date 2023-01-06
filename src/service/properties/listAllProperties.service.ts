import AppDataSource from "../../data-source"
import { Property } from "../../entities/properties.entity"
import { IPropertyRequest } from "../../interfaces/properties"

const listAllPropertiesService = async () => {
    const propertiesRepository = AppDataSource.getRepository(Property)

    const properties = await propertiesRepository.find()

    return properties
}

export default listAllPropertiesService