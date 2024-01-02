import Joi, { ObjectSchema } from 'joi';
const mainCategorySchema: ObjectSchema = Joi.object().keys({
  name: Joi.string().required().min(1).max(100).messages({
    'string.base': 'category name must be of type string',
    'string.min': 'Invalid category min name length',
    'string.max': 'Invalid category max name length',
    'string.empty': 'category name is a required field'
  }),
  slug: Joi.string().required().min(1).max(255).messages({
    'string.base': 'slug must be of type string',
    'string.min': 'Invalid category min slug length',
    'string.max': 'Invalid category max slug length',
    'string.empty': 'category slug is a required field'
  }),
  icon: Joi.string().required().min(1).max(255).allow(null).messages({
    'string.base': 'icon must be of type string',
    'string.min': 'Invalid category min icon length',
    'string.max': 'Invalid category max icon length',
    'string.empty': 'category icon is a required field'
  }),
  isShow: Joi.boolean().required().messages({
    'boolean.base': 'icon must be of type boolean',
    'boolean.empty': 'category show status is a required field'
  })
});

export { mainCategorySchema };
