import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Brands } from '@features/brands/models/brands';
import { LaptopTechnicalspecsInfo } from '@features/products/models/laptopTechnicalspecsInfo';
import { PhoneTechnicalspecsInfo } from '@features/products/models/phoneTechnicalspecsInfo';
import { MainCategories } from './mainCategories';
import { SubSubCategories } from './subSubCategories';

@Index('sub_categories_name_slug_key', ['name', 'slug'], { unique: true })
@Index('sub_categories_pkey', ['subCategoryId'], { unique: true })
@Entity('sub_categories', { schema: 'public' })
export class SubCategories {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'subCategoryId' })
  subCategoryId: number;

  @Column('character varying', { name: 'name', unique: true, length: 100 })
  name: string;

  @Column('character varying', { name: 'slug', unique: true, length: 100 })
  slug: string;

  @Column('character varying', { name: 'icon', nullable: true, length: 255 })
  icon: string | null;

  @Column('boolean', { name: 'isShow', default: () => 'true' })
  isShow: boolean;

  @OneToMany(() => Brands, (brands) => brands.subCategory)
  brands: Brands[];

  @OneToMany(() => LaptopTechnicalspecsInfo, (laptopInfo) => laptopInfo.subCategory)
  laptopInfo: LaptopTechnicalspecsInfo[];

  @OneToMany(() => PhoneTechnicalspecsInfo, (phoneInfo) => phoneInfo.subCategory)
  phoneInfo: PhoneTechnicalspecsInfo[];

  @ManyToOne(() => MainCategories, (mainCategories) => mainCategories.subCategories)
  @JoinColumn([{ name: 'mainCategoryId', referencedColumnName: 'mainCategoryId' }])
  mainCategory: MainCategories;

  @OneToMany(() => SubSubCategories, (subSubCategories) => subSubCategories.subCategory)
  subSubCategories: SubSubCategories[];
}
