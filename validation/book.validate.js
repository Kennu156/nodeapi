import Joi from "joi";

export const bookSchema = joi.object({
    title: joi.string().required().message({
        'string.empty': 'Title is empty',
        'any.required': 'Title is required'
    }),
    year: joi.number().required().message({
        'number.empty': 'Must be a number',
        'any.required': 'Year is required'
    }),
    author: joi.string().required().message({
        'string.empty': 'Publisher is required',
        'any.required': 'Publisher is required'
    })
})