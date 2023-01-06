import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IAddressRequest } from '../interfaces/address'

const addressesSchema: SchemaOf<IAddressRequest> = yup.object().shape({
    district: yup.string().required(),
    zipCode: yup.string().required(),
    number: yup.string().notRequired(),
    city: yup.string().required(),
    state: yup.string().required()
})


export { addressesSchema }