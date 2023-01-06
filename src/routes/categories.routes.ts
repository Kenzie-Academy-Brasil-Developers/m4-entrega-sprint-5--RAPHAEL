import { Router } from "express";
import { createCategoriesController, listAllCategoriesController, listCategoriesPropertiesController } from "../controller/categoriesController";
import invalidIdCategoryMiddleware from "../middleware/category/invalidId.middleware";
import verifyCategoryExists from "../middleware/category/verifyCategoryExists.middleware";
import authMiddleware from "../middleware/user/auth.middleware";
import validateDataMiddleware from "../middleware/user/validateData.middleware";
import verifyIsAdminMiddleware from "../middleware/user/verifyIsAdmin.middleware";

import { createCategorySchema } from "../schemas/createCategory.schema";

const categoriesRoutes = Router()

categoriesRoutes.post('', authMiddleware, verifyIsAdminMiddleware, verifyCategoryExists, validateDataMiddleware(createCategorySchema), createCategoriesController)
categoriesRoutes.get('', listAllCategoriesController)
categoriesRoutes.get('/:id/properties', invalidIdCategoryMiddleware, listCategoriesPropertiesController)

export default categoriesRoutes