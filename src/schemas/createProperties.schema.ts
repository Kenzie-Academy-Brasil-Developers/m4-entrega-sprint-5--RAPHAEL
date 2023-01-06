import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IPropertyRequest } from '../interfaces/properties'
import { addressesSchema } from './address.schema'

const createPropertySchema: SchemaOf<IPropertyRequest> = yup.object().shape({
    value: yup.number().required(),
    size: yup.number().required(),
    address: addressesSchema,
    categoryId: yup.string().required()
})


const listPropertySchema: SchemaOf<IPropertyRequest[]> = yup.array(createPropertySchema)


export { createPropertySchema, listPropertySchema }