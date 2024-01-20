import Joi, { ObjectSchema } from 'joi';
const brandSchema: ObjectSchema = Joi.object().keys({
  name: Joi.string().required().min(1).max(100).messages({
    'string.base': 'name must be of type string',
    'string.min': 'Invalid name',
    'string.max': 'Invalid name',
    'string.empty': 'name is a required field'
  }),
  slug: Joi.string().required().min(1).max(100).messages({
    'string.base': 'slug must be of type string',
    'string.min': 'Invalid slug',
    'string.max': 'Invalid slug',
    'string.empty': 'slug is a required field'
  }),
  isShow: Joi.boolean().messages({
    'boolean.base': 'isShow must be of type boolean'
  }),
  mainCategory: Joi.number().integer().messages({
    'number.base': 'mainCategory must be of type number'
  }),
  subCategory: Joi.number().integer().messages({
    'number.base': 'subCategory must be of type number'
  }),
  subSubCategory: Joi.number().integer().messages({
    'number.base': 'subSubCategory must be of type number'
  })
});

export { brandSchema };
