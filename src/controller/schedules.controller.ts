import { Request, Response } from "express";
import createScheduleService from "../service/schedules/createSchedule.service";
import listAllSchedulesPropertiesService from "../service/schedules/listAllSchedulesProperties.service";

const createScheduleController = async (req: Request, res: Response) => {
    const scheduleData = req.body
    const userId: string = req.params.id
    const newSchedule = await createScheduleService(scheduleData, userId)
    return res.status(201).send(newSchedule)
}

const listAllSchedulesPropertiesController = async (req: Request, res: Response) => {
    const propertyId: string = req.params.id
    const listSchedules = await listAllSchedulesPropertiesService(propertyId)
    return res.status(200).send(listSchedules)
}
export { createScheduleController, listAllSchedulesPropertiesController }