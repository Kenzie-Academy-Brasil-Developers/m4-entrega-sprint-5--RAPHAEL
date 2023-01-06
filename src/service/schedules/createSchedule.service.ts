import AppDataSource from "../../data-source";
import { Property } from "../../entities/properties.entity";
import { Schedule_User_Property } from "../../entities/schdules_users_properties.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async (scheduleData: IScheduleRequest, userId: string) => {

  const userRepository = AppDataSource.getRepository(User)
  const propertyRepository = AppDataSource.getRepository(Property)
  const scheduleRepository = AppDataSource.getRepository(Schedule_User_Property)

  const user = await userRepository.findOneBy({
    id: userId
  })

  const property = await propertyRepository.findOneBy({
    id: scheduleData.propertyId
  })

  const date = new Date(scheduleData.date);
  const getDay = date.getDay();
  if (getDay > 5) {
    throw new AppError("Invalid date only days of week", 400);
  }

  const findHourScheduling = await scheduleRepository.createQueryBuilder("schedules_users_properties")
    .innerJoinAndSelect("schedules_users_properties.property", "property")
    .where("property.id = :id_properties", { id_properties: scheduleData.propertyId! })
    .where("schedules_users_properties.hour = :schedule_hour", {
      schedule_hour: scheduleData.hour,
    })
    .getMany();

  if (findHourScheduling.length) {
    throw new AppError("Property scheduling already exists", 409)
  }  

  const newSchedule = scheduleRepository.create({
    ...scheduleData,
    property: property,
    user: user
  })


  await scheduleRepository.save(newSchedule)


  return { message: "Schedule created with successfully" }

}

export default createScheduleService