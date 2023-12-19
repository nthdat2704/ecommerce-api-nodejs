import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LaptopTechnicalspecsInfo } from './laptopTechnicalspecsInfo';
import { Brands } from '@features/brands/models/brands';
import { MainCategories } from '@features/categories/models/mainCategories';
import { SubCategories } from '@features/categories/models/subCategories';
import { SubSubCategories } from '@features/categories/models/subSubCategories';
import { Orders } from '@features/orders/models/orders';
import { PhoneTechnicalspecsInfo } from './phoneTechnicalspecsInfo';
import { ProductReviews } from '@features/reviews/models/productReviews';
import { UserCart } from '@features/cart/models/userCart';

@Index('main_product_info_pkey', ['mainProductId'], { unique: true })
@Index('main_product_info_name_slug_key', ['name', 'slug'], { unique: true })
@Entity('main_product_info', { schema: 'public' })
export class MainProductInfo {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'mainProductId' })
  mainProductId: number;

  @Column('character varying', { name: 'name', unique: true, length: 255 })
  name: string;

  @Column('money', { name: 'price' })
  price: string;

  @Column('money', { name: 'salePrice', nullable: true })
  salePrice: string | null;

  @Column('boolean', { name: 'isShow', default: () => 'true' })
  isShow: boolean;

  @Column('boolean', { name: 'isHotsale', default: () => 'false' })
  isHotsale: boolean;

  @Column('boolean', { name: 'hightlightProduct', default: () => 'false' })
  hightlightProduct: boolean;

  @Column('character varying', { name: 'color', length: 100 })
  color: string;

  @Column('character varying', { name: 'storage', length: 100 })
  storage: string;

  @Column('character varying', { name: 'description', length: 1000 })
  description: string;

  @Column('character varying', { name: 'slug', unique: true, length: 120 })
  slug: string;

  @OneToOne(() => LaptopTechnicalspecsInfo, (laptopTechnicalspecsInfo) => laptopTechnicalspecsInfo.mainProduct)
  laptopTechnicalspecsInfo: LaptopTechnicalspecsInfo;

  @ManyToOne(() => Brands, (brands) => brands.mainProductInfos)
  @JoinColumn([{ name: 'brandId', referencedColumnName: 'brandId' }])
  brand: Brands;

  @ManyToOne(() => MainCategories, (mainCategories) => mainCategories.mainProductInfos)
  @JoinColumn([{ name: 'mainCategoryId', referencedColumnName: 'mainCategoryId' }])
  mainCategory: MainCategories;

  @ManyToOne(() => SubCategories, (subCategories) => subCategories.mainProductInfos)
  @JoinColumn([{ name: 'subCategoryId', referencedColumnName: 'subCategoryId' }])
  subCategory: SubCategories;

  @ManyToOne(() => SubSubCategories, (subSubCategories) => subSubCategories.mainProductInfos)
  @JoinColumn([{ name: 'subSubCategoryId', referencedColumnName: 'subSubCategoryId' }])
  subSubCategory: SubSubCategories;

  @OneToMany(() => Orders, (orders) => orders.mainProduct)
  orders: Orders[];

  @OneToOne(() => PhoneTechnicalspecsInfo, (phoneTechnicalspecsInfo) => phoneTechnicalspecsInfo.mainProduct)
  phoneTechnicalspecsInfo: PhoneTechnicalspecsInfo;

  @OneToMany(() => ProductReviews, (productReviews) => productReviews.mainProduct)
  productReviews: ProductReviews[];

  @OneToMany(() => UserCart, (userCart) => userCart.mainProduct)
  userCarts: UserCart[];
}
