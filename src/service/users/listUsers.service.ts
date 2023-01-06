import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import { IUser } from "../../interfaces/users";
import { listUsersSchema } from "../../schemas/createUser.schema";


const listUsersService = async (): Promise<IUser[]> => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const listUsersValidated = await listUsersSchema.validate(users,{
        stripUnknown: true
    })

    return listUsersValidated
}

export default listUsersService