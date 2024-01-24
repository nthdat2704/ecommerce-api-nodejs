import Joi, { ObjectSchema } from 'joi';
import { productSchema } from './product';
const phoneSchema: ObjectSchema = Joi.object().keys({
  ...productSchema,
  mainProductId: Joi.number().required().messages({
    'number.base': 'mainProductId must be of type number',
    'number.empty': 'mainProductId is a required field'
  }),
  screenTech: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product screenTech must be of type string',
    'string.min': 'Invalid product min screenTech length',
    'string.max': 'Invalid product max screenTech length',
    'string.empty': 'product screenTech is a required field'
  }),

  screenResolution: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product screenResolution must be of type string',
    'string.min': 'Invalid product min screenResolution length',
    'string.max': 'Invalid product max screenResolution length',
    'string.empty': 'product screenResolution is a required field'
  }),

  screenSize: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product screenSize must be of type string',
    'string.min': 'Invalid product min screenSize length',
    'string.max': 'Invalid product max screenSize length',
    'string.empty': 'product screenSize is a required field'
  }),

  screenBrightness: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product screenBrightness must be of type string',
    'string.min': 'Invalid product min screenBrightness length',
    'string.max': 'Invalid product max screenBrightness length',
    'string.empty': 'product screenBrightness is a required field'
  }),

  screenGlass: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product screenGlass must be of type string',
    'string.min': 'Invalid product min screenGlass length',
    'string.max': 'Invalid product max screenGlass length',
    'string.empty': 'product screenGlass is a required field'
  }),

  rearcameraResolution: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product rearcameraResolution must be of type string',
    'string.min': 'Invalid product min rearcameraResolution length',
    'string.max': 'Invalid product max rearcameraResolution length',
    'string.empty': 'product rearcameraResolution is a required field'
  }),

  rearcameraVideo: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product rearcameraVideo must be of type string',
    'string.min': 'Invalid product min rearcameraVideo length',
    'string.max': 'Invalid product max rearcameraVideo length',
    'string.empty': 'product rearcameraVideo is a required field'
  }),

  rearcameraFlash: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product rearcameraFlash must be of type string',
    'string.min': 'Invalid product min rearcameraFlash length',
    'string.max': 'Invalid product max rearcameraFlash length',
    'string.empty': 'product rearcameraFlash is a required field'
  }),

  rearcameraFeature: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product rearcameraFeature must be of type string',
    'string.min': 'Invalid product min rearcameraFeature length',
    'string.max': 'Invalid product max rearcameraFeature length',
    'string.empty': 'product rearcameraFeature is a required field'
  }),

  frontcameraResolution: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product frontcameraResolution must be of type string',
    'string.min': 'Invalid product min frontcameraResolution length',
    'string.max': 'Invalid product max frontcameraResolution length',
    'string.empty': 'product frontcameraResolution is a required field'
  }),

  frontcameraFeature: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product frontcameraFeature must be of type string',
    'string.min': 'Invalid product min frontcameraFeature length',
    'string.max': 'Invalid product max frontcameraFeature length',
    'string.empty': 'product frontcameraFeature is a required field'
  }),

  cpuSystem: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product cpuSystem must be of type string',
    'string.min': 'Invalid product min cpuSystem length',
    'string.max': 'Invalid product max cpuSystem length',
    'string.empty': 'product cpuSystem is a required field'
  }),

  cpuName: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product cpuName must be of type string',
    'string.min': 'Invalid product min cpuName length',
    'string.max': 'Invalid product max cpuName length',
    'string.empty': 'product cpuName is a required field'
  }),

  cpuSpeed: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product cpuSpeed must be of type string',
    'string.min': 'Invalid product min cpuSpeed length',
    'string.max': 'Invalid product max cpuSpeed length',
    'string.empty': 'product cpuSpeed is a required field'
  }),

  cpuGpu: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product cpuGpu must be of type string',
    'string.min': 'Invalid product min cpuGpu length',
    'string.max': 'Invalid product max cpuGpu length',
    'string.empty': 'product cpuGpu is a required field'
  }),

  memoryRam: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product memoryRam must be of type string',
    'string.min': 'Invalid product min memoryRam length',
    'string.max': 'Invalid product max memoryRam length',
    'string.empty': 'product memoryRam is a required field'
  }),

  memoryStorage: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product memoryStorage must be of type string',
    'string.min': 'Invalid product min memoryStorage length',
    'string.max': 'Invalid product max memoryStorage length',
    'string.empty': 'product memoryStorage is a required field'
  }),

  memoryContact: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product memoryContact must be of type string',
    'string.min': 'Invalid product min memoryContact length',
    'string.max': 'Invalid product max memoryContact length',
    'string.empty': 'product memoryContact is a required field'
  }),

  connectMobilenetwork: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product connectMobilenetwork must be of type string',
    'string.min': 'Invalid product min connectMobilenetwork length',
    'string.max': 'Invalid product max connectMobilenetwork length',
    'string.empty': 'product connectMobilenetwork is a required field'
  }),

  connectSim: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product connectSim must be of type string',
    'string.min': 'Invalid product min connectSim length',
    'string.max': 'Invalid product max connectSim length',
    'string.empty': 'product connectSim is a required field'
  }),
  connectWifi: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product connectWifi must be of type string',
    'string.min': 'Invalid product min connectWifi length',
    'string.max': 'Invalid product max connectWifi length',
    'string.empty': 'product connectWifi is a required field'
  }),

  connectGps: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product connectGps must be of type string',
    'string.min': 'Invalid product min connectGps length',
    'string.max': 'Invalid product max connectGps length',
    'string.empty': 'product connectGps is a required field'
  }),

  connectBluetooth: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product connectBluetooth must be of type string',
    'string.min': 'Invalid product min connectBluetooth length',
    'string.max': 'Invalid product max connectBluetooth length',
    'string.empty': 'product connectBluetooth is a required field'
  }),

  connectCharging: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product connectCharging must be of type string',
    'string.min': 'Invalid product min connectCharging length',
    'string.max': 'Invalid product max connectCharging length',
    'string.empty': 'product connectCharging is a required field'
  }),

  connectJack: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product connectJack must be of type string',
    'string.min': 'Invalid product min connectJack length',
    'string.max': 'Invalid product max connectJack length',
    'string.empty': 'product connectJack is a required field'
  }),

  pinType: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product pinType must be of type string',
    'string.min': 'Invalid product min pinType length',
    'string.max': 'Invalid product max pinType length',
    'string.empty': 'product pinType is a required field'
  }),

  pinCapacity: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product pinCapacity must be of type string',
    'string.min': 'Invalid product min pinCapacity length',
    'string.max': 'Invalid product max pinCapacity length',
    'string.empty': 'product pinCapacity is a required field'
  }),

  pinMaxcharging: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product pinMaxcharging must be of type string',
    'string.min': 'Invalid product min pinMaxcharging length',
    'string.max': 'Invalid product max pinMaxcharging length',
    'string.empty': 'product pinMaxcharging is a required field'
  }),

  pinTech: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product pinTech must be of type string',
    'string.min': 'Invalid product min pinTech length',
    'string.max': 'Invalid product max pinTech length',
    'string.empty': 'product pinTech is a required field'
  }),

  utilitySecurity: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product utilitySecurity must be of type string',
    'string.min': 'Invalid product min utilitySecurity length',
    'string.max': 'Invalid product max utilitySecurity length',
    'string.empty': 'product utilitySecurity is a required field'
  }),

  utilitySpecial: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product utilitySpecial must be of type string',
    'string.min': 'Invalid product min utilitySpecial length',
    'string.max': 'Invalid product max utilitySpecial length',
    'string.empty': 'product utilitySpecial is a required field'
  }),

  utilityWaterresistance: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product utilityWaterresistance must be of type string',
    'string.min': 'Invalid product min utilityWaterresistance length',
    'string.max': 'Invalid product max utilityWaterresistance length',
    'string.empty': 'product utilityWaterresistance is a required field'
  }),

  utilityRecord: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product utilityRecord must be of type string',
    'string.min': 'Invalid product min utilityRecord length',
    'string.max': 'Invalid product max utilityRecord length',
    'string.empty': 'product utilityRecord is a required field'
  }),

  utilityWatch: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product utilityWatch must be of type string',
    'string.min': 'Invalid product min utilityWatch length',
    'string.max': 'Invalid product max utilityWatch length',
    'string.empty': 'product utilityWatch is a required field'
  }),

  utilityMusicplayback: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product utilityMusicplayback must be of type string',
    'string.min': 'Invalid product min utilityMusicplayback length',
    'string.max': 'Invalid product max utilityMusicplayback length',
    'string.empty': 'product utilityMusicplayback is a required field'
  }),

  generalDesgin: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product generalDesgin must be of type string',
    'string.min': 'Invalid product min generalDesgin length',
    'string.max': 'Invalid product max generalDesgin length',
    'string.empty': 'product generalDesgin is a required field'
  }),

  generalMaterials: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product generalMaterials must be of type string',
    'string.min': 'Invalid product min generalMaterials length',
    'string.max': 'Invalid product max generalMaterials length',
    'string.empty': 'product generalMaterials is a required field'
  }),

  generalSize: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product generalSize must be of type string',
    'string.min': 'Invalid product min generalSize length',
    'string.max': 'Invalid product max generalSize length',
    'string.empty': 'product generalSize is a required field'
  }),
  generalReleasedate: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product generalReleasedate must be of type string',
    'string.min': 'Invalid product min generalReleasedate length',
    'string.max': 'Invalid product max generalReleasedate length',
    'string.empty': 'product generalReleasedate is a required field'
  }),
  generalBrand: Joi.string().required().min(1).max(255).messages({
    'string.base': 'product generalBrand must be of type string',
    'string.min': 'Invalid product min generalBrand length',
    'string.max': 'Invalid product max generalBrand length',
    'string.empty': 'product generalBrand is a required field'
  })
});

export { phoneSchema };
