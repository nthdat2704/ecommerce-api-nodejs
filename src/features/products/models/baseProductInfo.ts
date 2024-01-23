import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BaseProductInfo {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'productId' })
  productId: number;

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
  @Column('character varying', { name: 'typeProduct', length: 120 })
  typeProduct: string;
}
