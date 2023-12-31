import { MainCategories } from '@features/categories/models/mainCategories';
import { SubCategories } from '@features/categories/models/subCategories';
import { SubSubCategories } from '@features/categories/models/subSubCategories';
import { MainProductInfo } from '@features/products/models/mainProductInfo';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('brands_pkey', ['brandId'], { unique: true })
@Index('brands_name_key', ['name'], { unique: true })
@Entity('brands', { schema: 'public' })
export class Brands {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'brandId' })
  brandId: number;

  @Column('character varying', { name: 'name', unique: true, length: 100 })
  name: string;

  @Column('character varying', { name: 'slug', length: 100 })
  slug: string;

  @Column('character varying', { name: 'logo', nullable: true, length: 255 })
  logo: string | null;

  @Column('boolean', { name: 'isShow', default: () => 'true' })
  isShow: boolean;

  @ManyToOne(() => MainCategories, (mainCategories) => mainCategories.brands)
  @JoinColumn([{ name: 'mainCategoryId', referencedColumnName: 'mainCategoryId' }])
  mainCategory: MainCategories;

  @ManyToOne(() => SubCategories, (subCategories) => subCategories.brands)
  @JoinColumn([{ name: 'subCategoryId', referencedColumnName: 'subCategoryId' }])
  subCategory: SubCategories;

  @ManyToOne(() => SubSubCategories, (subSubCategories) => subSubCategories.brands)
  @JoinColumn([{ name: 'subSubCategoryId', referencedColumnName: 'subSubCategoryId' }])
  subSubCategory: SubSubCategories;

  @OneToMany(() => MainProductInfo, (mainProductInfo) => mainProductInfo.brand)
  mainProductInfos: MainProductInfo[];
}
