import AppDataSource from "../../data-source"
import { User } from "../../entities/users.entity"
import { AppError } from "../../errors/appError"

const deleteUserService = async (userId: string) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: userId
    })

    if (!user) {
        throw new AppError('User not found', 404)
    }


    if (user.isActive == false) {

        throw new AppError('User already inative', 400)
    }

    const deleteUser = await userRepository.update(
        {
            id: userId
        },
        {
            isActive: false
        })

    return deleteUser
}

export default deleteUserService