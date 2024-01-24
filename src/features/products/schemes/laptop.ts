import Joi, { ObjectSchema } from 'joi';
import { productSchema } from './product';
const laptopSchema: ObjectSchema = Joi.object().keys({
  ...productSchema,
  cpuTech: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product cpuTech must be of type string',
    'string.min': 'Invalid product min cpuTech length',
    'string.max': 'Invalid product max cpuTech length',
    'string.empty': 'product cpuTech is a required field'
  }),
  cpuCores: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product cpuCores must be of type string',
    'string.min': 'Invalid product min cpuCores length',
    'string.max': 'Invalid product max cpuCores length',
    'string.empty': 'product cpuCores is a required field'
  }),
  cpuThreads: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product cpuThreads must be of type string',
    'string.min': 'Invalid product min cpuThreads length',
    'string.max': 'Invalid product max cpuThreads length',
    'string.empty': 'product cpuThreads is a required field'
  }),
  cpuSpeed: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product cpuSpeed must be of type string',
    'string.min': 'Invalid product min cpuSpeed length',
    'string.max': 'Invalid product max cpuSpeed length',
    'string.empty': 'product cpuSpeed is a required field'
  }),
  cpuMaxspeed: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product cpuMaxspeed must be of type string',
    'string.min': 'Invalid product min cpuMaxspeed length',
    'string.max': 'Invalid product max cpuMaxspeed length',
    'string.empty': 'product cpuMaxspeed is a required field'
  }),
  cpuCache: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product cpuCache must be of type string',
    'string.min': 'Invalid product min cpuCache length',
    'string.max': 'Invalid product max cpuCache length',
    'string.empty': 'product cpuCache is a required field'
  }),
  ramSize: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product ramSize must be of type string',
    'string.min': 'Invalid product min ramSize length',
    'string.max': 'Invalid product max ramSize length',
    'string.empty': 'product ramSize is a required field'
  }),
  ramType: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product ramType must be of type string',
    'string.min': 'Invalid product min ramType length',
    'string.max': 'Invalid product max ramType length',
    'string.empty': 'product ramType is a required field'
  }),
  ramSpeed: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product ramSpeed must be of type string',
    'string.min': 'Invalid product min ramSpeed length',
    'string.max': 'Invalid product max ramSpeed length',
    'string.empty': 'product ramSpeed is a required field'
  }),
  ramMaxsupport: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product ramMaxsupport must be of type string',
    'string.min': 'Invalid product min ramMaxsupport length',
    'string.max': 'Invalid product max ramMaxsupport length',
    'string.empty': 'product ramMaxsupport is a required field'
  }),
  storage: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product storage must be of type string',
    'string.min': 'Invalid product min storage length',
    'string.max': 'Invalid product max storage length',
    'string.empty': 'product storage is a required field'
  }),
  screenSize: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product screenSize must be of type string',
    'string.min': 'Invalid product min screenSize length',
    'string.max': 'Invalid product max screenSize length',
    'string.empty': 'product screenSize is a required field'
  }),
  screenResolution: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product screenResolution must be of type string',
    'string.min': 'Invalid product min screenResolution length',
    'string.max': 'Invalid product max screenResolution length',
    'string.empty': 'product screenResolution is a required field'
  }),
  screenRefreshrate: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product screenRefreshrate must be of type string',
    'string.min': 'Invalid product min screenRefreshrate length',
    'string.max': 'Invalid product max screenRefreshrate length',
    'string.empty': 'product screenRefreshrate is a required field'
  }),
  screenTech: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product screenTech must be of type string',
    'string.min': 'Invalid product min screenTech length',
    'string.max': 'Invalid product max screenTech length',
    'string.empty': 'product screenTech is a required field'
  }),
  cardGraphics: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product cardGraphics must be of type string',
    'string.min': 'Invalid product min cardGraphics length',
    'string.max': 'Invalid product max cardGraphics length',
    'string.empty': 'product cardGraphics is a required field'
  }),
  audioTech: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product audioTech must be of type string',
    'string.min': 'Invalid product min audioTech length',
    'string.max': 'Invalid product max audioTech length',
    'string.empty': 'product audioTech is a required field'
  }),
  featuresPort: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product featuresPort must be of type string',
    'string.min': 'Invalid product min featuresPort length',
    'string.max': 'Invalid product max featuresPort length',
    'string.empty': 'product featuresPort is a required field'
  }),
  featuresConnect: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product featuresConnect must be of type string',
    'string.min': 'Invalid product min featuresConnect length',
    'string.max': 'Invalid product max featuresConnect length',
    'string.empty': 'product featuresConnect is a required field'
  }),
  featuresWebcam: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product featuresWebcam must be of type string',
    'string.min': 'Invalid product min featuresWebcam length',
    'string.max': 'Invalid product max featuresWebcam length',
    'string.empty': 'product featuresWebcam is a required field'
  }),
  featuresOthers: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product featuresOthers must be of type string',
    'string.min': 'Invalid product min featuresOthers length',
    'string.max': 'Invalid product max featuresOthers length',
    'string.empty': 'product featuresOthers is a required field'
  }),
  featuresKeyled: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product featuresKeyled must be of type string',
    'string.min': 'Invalid product min featuresKeyled length',
    'string.max': 'Invalid product max featuresKeyled length',
    'string.empty': 'product featuresKeyled is a required field'
  }),
  productSize: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product productSize must be of type string',
    'string.min': 'Invalid product min productSize length',
    'string.max': 'Invalid product max productSize length',
    'string.empty': 'product productSize is a required field'
  }),
  productMaterials: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product productMaterials must be of type string',
    'string.min': 'Invalid product min productMaterials length',
    'string.max': 'Invalid product max productMaterials length',
    'string.empty': 'product productMaterials is a required field'
  }),
  othersPin: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product othersPin must be of type string',
    'string.min': 'Invalid product min othersPin length',
    'string.max': 'Invalid product max othersPin length',
    'string.empty': 'product othersPin is a required field'
  }),
  othersSystem: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product othersSystem must be of type string',
    'string.min': 'Invalid product min othersSystem length',
    'string.max': 'Invalid product max othersSystem length',
    'string.empty': 'product othersSystem is a required field'
  }),
  othersReleasedate: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product othersReleasedate must be of type string',
    'string.min': 'Invalid product min othersReleasedate length',
    'string.max': 'Invalid product max othersReleasedate length',
    'string.empty': 'product othersReleasedate is a required field'
  })
});

export { laptopSchema };
