import * as yup from 'yup'
import { SchemaOf } from "yup";
import { ICategoryRequest, ICategory } from "../interfaces/categories";

const createCategorySchema: SchemaOf<ICategoryRequest> = yup.object().shape({
    name: yup.string().required()
})

const returnCreateCategorySchema: SchemaOf<ICategory> = yup.object().shape({

    id: yup.string(),
    name: yup.string()
})

const listAllCategoriesSchema: SchemaOf<ICategory[]> = yup.array(returnCreateCategorySchema)

export { createCategorySchema, returnCreateCategorySchema, listAllCategoriesSchema }