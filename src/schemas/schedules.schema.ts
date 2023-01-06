import * as yup from 'yup'

export const createSchedulesSchema  = yup.object().shape({
    propertyId: yup.string().required(),
    date: yup.string().matches(
        /^\d{4}[\-\/\s]?((((0[13578])|(1[02]))[\-\/\s]?(([0-2][0-9])|(3[01])))|(((0[469])|(11))[\-\/\s]?(([0-2][0-9])|(30)))|(02[\-\/\s]?[0-2][0-9]))$/,
        "Required data"
    ).required(),
    hour: yup.string().matches(
        /^((0?[89]|1[0-7]):[0-5][0-9]|18:00)$/,
        "Business hours 08:00 - 18:00 only, or invalid format"
    ).required()

})
