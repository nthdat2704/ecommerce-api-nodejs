import { UserInfomation } from '@features/auth/models/userInfomation';
import { LaptopTechnicalspecsInfo } from '@features/products/models/laptopTechnicalspecsInfo';
import { PhoneTechnicalspecsInfo } from '@features/products/models/phoneTechnicalspecsInfo';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Index('orders_pkey', ['orderId'], { unique: true })
@Entity('orders', { schema: 'public' })
export class Orders {
  @Column('integer', { primary: true, name: 'orderId' })
  orderId: number;

  @Column('character varying', { name: 'orderCode', length: 255 })
  orderCode: string;

  @Column('money', { name: 'currentOrderprice' })
  currentOrderprice: string;

  @Column('integer', { name: 'amount' })
  amount: number;

  @Column('character varying', {
    name: 'appliedCoupon',
    nullable: true,
    length: 100
  })
  appliedCoupon: string | null;

  @Column('money', { name: 'appliedCouponprice', nullable: true })
  appliedCouponprice: string | null;

  @Column('money', { name: 'totalPrice' })
  totalPrice: string;

  @Column('character varying', { name: 'address', length: 100 })
  address: string;

  @Column('character varying', { name: 'phone', length: 15 })
  phone: string;

  @Column('character varying', { name: 'orderStatus', length: 100 })
  orderStatus: string;

  @Column('character varying', { name: 'paymentStatus', length: 100 })
  paymentStatus: string;

  @Column('character varying', { name: 'paymentMethod', length: 100 })
  paymentMethod: string;

  @Column('character varying', { name: 'shippingHistory', length: 100 })
  shippingHistory: string;

  @Column('timestamp without time zone', { name: 'createdAt' })
  createdAt: Date;

  @ManyToOne(() => LaptopTechnicalspecsInfo, (laptopInfo) => laptopInfo.orders)
  @ManyToOne(() => PhoneTechnicalspecsInfo, (phoneInfo) => phoneInfo.orders)
  @JoinColumn([{ name: 'productId', referencedColumnName: 'productId' }])
  laptopInfo: LaptopTechnicalspecsInfo;
  phoneInfo: PhoneTechnicalspecsInfo;

  @ManyToOne(() => UserInfomation, (userInfomation) => userInfomation.orders)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'userId' }])
  user: UserInfomation;
}
