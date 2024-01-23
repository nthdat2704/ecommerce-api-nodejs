import { UserInfomation } from '@features/auth/models/userInfomation';
import { LaptopTechnicalspecsInfo } from '@features/products/models/laptopTechnicalspecsInfo';
import { PhoneTechnicalspecsInfo } from '@features/products/models/phoneTechnicalspecsInfo';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Index('user_cart_pkey', ['cartId'], { unique: true })
@Entity('user_cart', { schema: 'public' })
export class UserCart {
  @Column('integer', { primary: true, name: 'cartId' })
  cartId: number;

  @Column('integer', { name: 'amount', default: () => '1' })
  amount: number;

  @ManyToOne(() => LaptopTechnicalspecsInfo, (laptopInfo) => laptopInfo.userCarts)
  @ManyToOne(() => PhoneTechnicalspecsInfo, (phoneInfo) => phoneInfo.userCarts)
  @JoinColumn([{ name: 'productId', referencedColumnName: 'productId' }])
  laptopInfo: LaptopTechnicalspecsInfo;
  phoneInfo: PhoneTechnicalspecsInfo;

  @ManyToOne(() => UserInfomation, (userInfomation) => userInfomation.userCarts)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'userId' }])
  user: UserInfomation;
}
