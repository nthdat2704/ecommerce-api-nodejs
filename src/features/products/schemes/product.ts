import Joi from 'joi';
const productSchema = {
  name: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product name must be of type string',
    'string.min': 'Invalid product min name length',
    'string.max': 'Invalid product max name length',
    'string.empty': 'product name is a required field'
  }),

  salePrice: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product sale price must be of type string',
    'string.min': 'Invalid product sale price min length',
    'string.max': 'Invalid product sale price max length'
  }),

  price: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product price must be of type string',
    'string.min': 'Invalid product price min length',
    'string.max': 'Invalid product price max length',
    'string.empty': 'product price is a required field'
  }),
  color: Joi.string().required().min(1).max(20).messages({
    'string.base': 'product color must be of type string',
    'string.min': 'Invalid product color min length',
    'string.max': 'Invalid product color max length',
    'string.empty': 'product color is a required field'
  }),
  description: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product description must be of type string',
    'string.min': 'Invalid product description min length',
    'string.max': 'Invalid product description max length',
    'string.empty': 'product description is a required field'
  }),
  slug: Joi.string().required().min(1).max(255).messages({
    'string.base': 'slug must be of type string',
    'string.min': 'Invalid product min slug length',
    'string.max': 'Invalid product max slug length',
    'string.empty': 'product slug is a required field'
  }),
  typeProduct: Joi.string().required().min(1).max(255).messages({
    'string.base': 'type must be of type string',
    'string.min': 'Invalid product min type length',
    'string.max': 'Invalid product max type length',
    'string.empty': 'product type is a required field'
  }),
  brand: Joi.number().required().messages({
    'number.base': 'brandId must be of type number',
    'number.empty': 'brandId is a required field'
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
};

export { productSchema };
