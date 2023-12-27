import Joi, { ObjectSchema } from 'joi';
const signoutSchema: ObjectSchema = Joi.object().keys({
  refreshToken: Joi.string().required().min(6).max(255).messages({
    'string.base': 'refreshToken must be of type string',
    'string.min': 'Invalid refreshToken min length',
    'string.max': 'Invalid refreshToken max length',
    'string.empty': 'refreshToken is a required field'
  })
});

export { signoutSchema };
