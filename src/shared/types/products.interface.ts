import { LaptopTechnicalspecsInfo } from '@features/products/models/laptopTechnicalspecsInfo';
import { PhoneTechnicalspecsInfo } from '@features/products/models/phoneTechnicalspecsInfo';
import { Repository } from 'typeorm';

export type TProductsTypePayload = 'phone' | 'laptop';
export type TProductsModelPayload = LaptopTechnicalspecsInfo | PhoneTechnicalspecsInfo;
export type TProductsPartialModelPayload = Partial<LaptopTechnicalspecsInfo>;
export type TRepo = Repository<PhoneTechnicalspecsInfo | LaptopTechnicalspecsInfo>;
