import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

const listAllSchedulesPropertiesService = async (propertyId: string) => {
  const propertyRepository = AppDataSource.getRepository(Property)
  const propertySchedules = await propertyRepository
    .createQueryBuilder("properties")
    .innerJoinAndSelect("properties.schedules", "schedules")
    .innerJoinAndSelect("schedules.user", "user")
    .where("schedules.property = :id_property", { id_property: propertyId })
    .getOne();

  if (propertySchedules == null) {
    throw new AppError("This propertchedules", 404)
  }  

  return propertySchedules
}

export default listAllSchedulesPropertiesService