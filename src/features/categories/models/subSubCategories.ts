import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { SubCategories } from './subCategories';
import { Brands } from '@features/brands/models/brands';
import { MainProductInfo } from '@features/products/models/mainProductInfo';

@Index('sub_sub_categories_name_slug_key', ['name', 'slug'], { unique: true })
@Index('sub-sub_categories_pkey', ['subSubCategoryId'], { unique: true })
@Entity('sub_sub_categories', { schema: 'public' })
export class SubSubCategories {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'subSubCategoryId' })
  subSubCategoryId: number;

  @Column('character varying', { name: 'name', unique: true, length: 100 })
  name: string;

  @Column('character varying', { name: 'slug', unique: true, length: 100 })
  slug: string;

  @Column('character varying', { name: 'icon', nullable: true, length: 255 })
  icon: string | null;

  @Column('boolean', { name: 'isShow', default: () => 'true' })
  isShow: boolean;

  @OneToMany(() => Brands, (brands) => brands.subSubCategory)
  brands: Brands[];

  @OneToMany(() => MainProductInfo, (mainProductInfo) => mainProductInfo.subSubCategory)
  mainProductInfos: MainProductInfo[];

  @ManyToOne(() => SubCategories, (subCategories) => subCategories.subSubCategories)
  @JoinColumn([{ name: 'subCategoryId', referencedColumnName: 'subCategoryId' }])
  subCategory: SubCategories;
}
