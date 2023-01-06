import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controller/users.controller";
import authMiddleware from "../middleware/user/auth.middleware";
import compareAdminOrOwnerMiddleware from "../middleware/user/compareAdminOrOwner.middleware";
import invalidIdMiddleware from "../middleware/user/InvalidId.middleware";
import userExistsMiddleware from "../middleware/user/userExists.middleware";
import validateDataMiddleware from "../middleware/user/validateData.middleware";
import verifyIsAdminMiddleware from "../middleware/user/verifyIsAdmin.middleware";
import { createUserSchema } from "../schemas/createUser.schema";

const usersRouter = Router()

usersRouter.post('', userExistsMiddleware, validateDataMiddleware(createUserSchema), createUserController)
usersRouter.get('', authMiddleware, verifyIsAdminMiddleware, listUsersController)
usersRouter.patch('/:id', invalidIdMiddleware, authMiddleware, compareAdminOrOwnerMiddleware, updateUserController)
usersRouter.delete('/:id', authMiddleware, verifyIsAdminMiddleware, deleteUserController)
export { usersRouter }