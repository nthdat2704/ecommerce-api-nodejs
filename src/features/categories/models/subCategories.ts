import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { MainCategories } from './mainCategories';
import { SubSubCategories } from './subSubCategories';
import { Brands } from '@features/brands/models/brands';
import { MainProductInfo } from '@features/products/models/mainProductInfo';

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

  @OneToMany(() => MainProductInfo, (mainProductInfo) => mainProductInfo.subCategory)
  mainProductInfos: MainProductInfo[];

  @ManyToOne(() => MainCategories, (mainCategories) => mainCategories.subCategories)
  @JoinColumn([{ name: 'mainCategoryId', referencedColumnName: 'mainCategoryId' }])
  mainCategory: MainCategories;

  @OneToMany(() => SubSubCategories, (subSubCategories) => subSubCategories.subCategory)
  subSubCategories: SubSubCategories[];
}
