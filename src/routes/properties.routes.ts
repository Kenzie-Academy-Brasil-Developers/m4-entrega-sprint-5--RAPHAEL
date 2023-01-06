import { Router } from "express";
import { createPropertyController, listAllPropertiesController } from "../controller/properties.controller";
import authMiddleware from "../middleware/user/auth.middleware";
import verifyIsAdminMiddleware from "../middleware/user/verifyIsAdmin.middleware";

const propertiesRoutes = Router()

propertiesRoutes.post('', authMiddleware, verifyIsAdminMiddleware, createPropertyController)
propertiesRoutes.get('', listAllPropertiesController)
export default propertiesRoutes