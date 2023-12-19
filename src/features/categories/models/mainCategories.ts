import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SubCategories } from './subCategories';
import { MainProductInfo } from '@features/products/models/mainProductInfo';
import { Brands } from '@features/brands/models/brands';

@Index('main_categories_pkey', ['mainCategoryId'], { unique: true })
@Index('main_categories_name_slug_key', ['name', 'slug'], { unique: true })
@Entity('main_categories', { schema: 'public' })
export class MainCategories {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'mainCategoryId' })
  mainCategoryId: number;

  @Column('character varying', { name: 'name', unique: true, length: 100 })
  name: string;

  @Column('character varying', { name: 'slug', unique: true, length: 100 })
  slug: string;

  @Column('character varying', { name: 'icon', nullable: true, length: 255 })
  icon: string | null;

  @Column('boolean', { name: 'isShow', default: () => 'true' })
  isShow: boolean;

  @OneToMany(() => Brands, (brands) => brands.mainCategory)
  brands: Brands[];

  @OneToMany(() => MainProductInfo, (mainProductInfo) => mainProductInfo.mainCategory)
  mainProductInfos: MainProductInfo[];

  @OneToMany(() => SubCategories, (subCategories) => subCategories.mainCategory)
  subCategories: SubCategories[];
}
