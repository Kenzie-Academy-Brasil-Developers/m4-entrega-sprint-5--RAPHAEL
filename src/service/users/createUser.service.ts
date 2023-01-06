import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUser } from "../../interfaces/users";
import { returnCreateUserSchema } from "../../schemas/createUser.schema";

const createUserService = async (userData: IUser) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = userRepository.create(userData)

    await userRepository.save(user)

    const userValidated = await returnCreateUserSchema.validate(user, {
        stripUnknown: true,
        abortEarly: false
    })

    return userValidated
}

export default createUserService