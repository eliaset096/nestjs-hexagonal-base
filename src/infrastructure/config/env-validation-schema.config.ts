import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
    PORT: Joi.number().default(8000),
})
