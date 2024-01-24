import { Brands } from '@features/brands/models/brands';
import { UserCart } from '@features/cart/models/userCart';
import { MainCategories } from '@features/categories/models/mainCategories';
import { SubCategories } from '@features/categories/models/subCategories';
import { SubSubCategories } from '@features/categories/models/subSubCategories';
import { Orders } from '@features/orders/models/orders';
import { ProductReviews } from '@features/reviews/models/productReviews';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseProductInfo } from './baseProductInfo';
@Entity('laptop_technicalspecs_info', { schema: 'public' })
export class LaptopTechnicalspecsInfo extends BaseProductInfo {
  @Column('character varying', { name: 'cpuTech', length: 255 })
  cpuTech: string;

  @Column('character varying', { name: 'cpuCores', length: 255 })
  cpuCores: string;

  @Column('character varying', { name: 'cpuThreads', length: 255 })
  cpuThreads: string;

  @Column('character varying', { name: 'cpuSpeed', length: 255 })
  cpuSpeed: string;

  @Column('character varying', { name: 'cpuMaxspeed', length: 255 })
  cpuMaxspeed: string;

  @Column('character varying', { name: 'cpuCache', length: 255 })
  cpuCache: string;

  @Column('character varying', { name: 'ramSize', length: 255 })
  ramSize: string;

  @Column('character varying', { name: 'ramType', length: 255 })
  ramType: string;

  @Column('character varying', { name: 'ramSpeed', length: 255 })
  ramSpeed: string;

  @Column('character varying', { name: 'ramMaxsupport', length: 255 })
  ramMaxsupport: string;

  @Column('character varying', { name: 'storage', length: 255 })
  storage: string;

  @Column('character varying', { name: 'screenSize', length: 255 })
  screenSize: string;

  @Column('character varying', { name: 'screenResolution', length: 255 })
  screenResolution: string;

  @Column('character varying', { name: 'screenRefreshrate', length: 255 })
  screenRefreshrate: string;

  @Column('character varying', { name: 'screenTech', length: 255 })
  screenTech: string;

  @Column('character varying', { name: 'cardGraphics', length: 255 })
  cardGraphics: string;

  @Column('character varying', { name: 'audioTech', length: 255 })
  audioTech: string;

  @Column('character varying', { name: 'featuresPort', length: 255 })
  featuresPort: string;

  @Column('character varying', { name: 'featuresConnect', length: 255 })
  featuresConnect: string;

  @Column('character varying', { name: 'featuresWebcam', length: 255 })
  featuresWebcam: string;

  @Column('character varying', { name: 'featuresOthers', length: 255 })
  featuresOthers: string;

  @Column('character varying', { name: 'featuresKeyled', length: 255 })
  featuresKeyled: string;

  @Column('character varying', { name: 'productSize', length: 255 })
  productSize: string;

  @Column('character varying', { name: 'productMaterials', length: 255 })
  productMaterials: string;

  @Column('character varying', { name: 'othersPin', length: 255 })
  othersPin: string;

  @Column('character varying', { name: 'othersSystem', length: 255 })
  othersSystem: string;

  @Column('character varying', { name: 'othersReleasedate', length: 255 })
  othersReleasedate: string;

  @ManyToOne(() => MainCategories, (mainCategories) => mainCategories.laptopInfo)
  @JoinColumn([{ name: 'mainCategoryId', referencedColumnName: 'mainCategoryId' }])
  mainCategory: MainCategories;

  @ManyToOne(() => SubCategories, (subCategories) => subCategories.laptopInfo)
  @JoinColumn([{ name: 'subCategoryId', referencedColumnName: 'subCategoryId' }])
  subCategory: SubCategories;

  @ManyToOne(() => SubSubCategories, (subSubCategories) => subSubCategories.laptopInfo)
  @JoinColumn([{ name: 'subSubCategoryId', referencedColumnName: 'subSubCategoryId' }])
  subSubCategory: SubSubCategories;

  @OneToMany(() => Orders, (orders) => orders.laptopInfo)
  orders: Orders[];

  @OneToMany(() => ProductReviews, (productReviews) => productReviews.laptopInfo)
  productReviews: ProductReviews[];

  @OneToMany(() => UserCart, (userCart) => userCart.laptopInfo)
  userCarts: UserCart[];

  @ManyToOne(() => Brands, (brands) => brands.laptopInfo)
  @JoinColumn([{ name: 'brandId', referencedColumnName: 'brandId' }])
  brand: Brands | number;
}
