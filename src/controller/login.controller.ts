import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/users";
import loginService from "../service/login/login.service";

export const loginController = async (req: Request, res: Response) => {
    const loginUser: IUserLogin = req.body
    const token = await loginService(loginUser)
    return res.json({token})
}