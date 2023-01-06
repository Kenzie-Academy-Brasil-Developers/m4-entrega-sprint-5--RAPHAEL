import { Request, Response } from "express";
import { IUser } from "../interfaces/users";
import createUserService from "../service/users/createUser.service";
import deleteUserService from "../service/users/deleteUser.Service";
import listUsersService from "../service/users/listUsers.service";
import updateUserService from "../service/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
    const userData: IUser = req.body
    const newUser = await createUserService(userData)
    return res.status(201).send(newUser)
}

const listUsersController = async (req: Request, res: Response) => {
    const listUsers = await listUsersService()
    return res.status(200).send(listUsers)
}

const updateUserController = async (req: Request, res: Response) => {
    const updateUserData = req.body
    const userId = req.params.id
    const update = await updateUserService(updateUserData, userId)
    return res.status(200).send(update)
}

const deleteUserController = async (req:Request, res: Response) => {
    const userId = req.params.id
    await deleteUserService(userId)
    return res.status(204).json({})
}
export { createUserController, listUsersController, updateUserController, deleteUserController}