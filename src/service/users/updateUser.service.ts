import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUser, IUserUpdate } from "../../interfaces/users";
import { returnCreateUserSchema } from "../../schemas/createUser.schema";

const updateUserService = async (updateUserData: IUserUpdate, userId: string): Promise<IUser> => {

    const userRepository = AppDataSource.getRepository(User)

    const findIdUser = await userRepository.findOneBy({
        id: userId
    })
    const updateUser = userRepository.create({
        ...findIdUser,
        ...updateUserData
    })

    await userRepository.save(updateUser)

    const validateUpdate = returnCreateUserSchema.validate(updateUser, {
        stripUnknown: true
    })

    return validateUpdate
        
}

export default updateUserService