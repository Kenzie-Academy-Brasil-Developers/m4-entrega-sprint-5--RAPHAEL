import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUser, IUserRequest, IUserUpdate } from '../interfaces/users'

const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().max(50).required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    isAdm: yup.boolean().notRequired().default(false)
})

const returnCreateUserSchema: SchemaOf<IUser> = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string().email(),
    isAdm: yup.boolean(),
    isActive: yup.boolean(),
    createdAt: yup.date(),
    updatedAt: yup.date()
})

const listUsersSchema: SchemaOf<IUser[]> = yup.array(returnCreateUserSchema)

const updateUserData: SchemaOf<IUserUpdate> = yup.object().shape({
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired()
})

export { createUserSchema, returnCreateUserSchema, listUsersSchema, updateUserData }