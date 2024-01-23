import { Brands } from '@features/brands/models/brands';
import { LaptopTechnicalspecsInfo } from '@features/products/models/laptopTechnicalspecsInfo';
import { PhoneTechnicalspecsInfo } from '@features/products/models/phoneTechnicalspecsInfo';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SubCategories } from './subCategories';

@Index('main_categories_pkey', ['mainCategoryId'], { unique: true })
@Index('main_categories_name_slug_key', ['name', 'slug'], { unique: true })
@Entity('main_categories', { schema: 'public' })
export class MainCategories {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'mainCategoryId' })
  mainCategoryId: number;

  @Column('character varying', { name: 'name', unique: true, length: 100 })
  name: string;

  @Column('character varying', { name: 'slug', unique: true, length: 255 })
  slug: string;

  @Column('character varying', { name: 'icon', nullable: true, length: 255 })
  icon: string | null;

  @Column('boolean', { name: 'isShow', default: () => 'true' })
  isShow: boolean;

  @OneToMany(() => Brands, (brands) => brands.mainCategory)
  brands: Brands[];

  @OneToMany(() => LaptopTechnicalspecsInfo, (laptopInfo) => laptopInfo.mainCategory)
  laptopInfo: LaptopTechnicalspecsInfo[];

  @OneToMany(() => PhoneTechnicalspecsInfo, (phoneInfo) => phoneInfo.mainCategory)
  phoneInfo: PhoneTechnicalspecsInfo[];

  @OneToMany(() => SubCategories, (subCategories) => subCategories.mainCategory)
  subCategories: SubCategories[];
}
