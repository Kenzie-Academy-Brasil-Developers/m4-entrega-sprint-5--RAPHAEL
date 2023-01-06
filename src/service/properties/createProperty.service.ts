import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { Category } from "../../entities/categories.entity";
import { Property } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async (propertyData: IPropertyRequest) => {

    const { address, categoryId, size, value } = propertyData

    const categoriesRepository = AppDataSource.getRepository(Category)
    const propertyRepository = AppDataSource.getRepository(Property)
    const addressRepository = AppDataSource.getRepository(Address)

    const category = await categoriesRepository.findOneBy(
        { id: categoryId }
    )

    const findAddress = await addressRepository.findOneBy(
        {
            zipCode: address.zipCode,
            number: address.number
        }
    )

    if (address.zipCode.length > 8) {
        throw new AppError("Invalid Zipcode", 400)
    }

    if (address.state.length > 2) {
        throw new AppError("Invalid State", 400)
    }

    if (findAddress) {
        throw new AppError("Address already exists", 409)
    }

    if (!category) {
        throw new AppError("Category not found", 404)
    }

    const newAddress = addressRepository.create(
        {
            district: address.district,
            zipCode: address.zipCode,
            number: address.number,
            city: address.city,
            state: address.state
        }
    )

    await addressRepository.save(newAddress)

    const newProperty = propertyRepository.create(
        {
            value,
            size,
            category: {
                id: category.id,
                name: category.name
            },
            address: newAddress
        }
    )

    await propertyRepository.save(newProperty)

    return newProperty
}

export default createPropertyService