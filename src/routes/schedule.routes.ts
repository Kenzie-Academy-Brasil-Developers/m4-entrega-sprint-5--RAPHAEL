import { Router } from "express";
import { createScheduleController, listAllSchedulesPropertiesController } from "../controller/schedules.controller";
import invalidIdScheduleMiddleware from "../middleware/schedule/invalidIdSchedule.middleware";
import authMiddleware from "../middleware/user/auth.middleware";
import validateDataMiddleware from "../middleware/user/validateData.middleware";
import verifyIsAdminMiddleware from "../middleware/user/verifyIsAdmin.middleware";
import { createSchedulesSchema } from "../schemas/schedules.schema";

const schedulesRoutes = Router()

schedulesRoutes.post('', validateDataMiddleware(createSchedulesSchema), authMiddleware, invalidIdScheduleMiddleware, createScheduleController)
schedulesRoutes.get('/properties/:id', authMiddleware, verifyIsAdminMiddleware, /*invalidIdScheduleMiddleware,*/ listAllSchedulesPropertiesController)

export default schedulesRoutes