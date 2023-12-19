import { UserInfomation } from '@features/auth/models/userInfomation';
import { MainProductInfo } from '@features/products/models/mainProductInfo';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Index('user_cart_pkey', ['cartId'], { unique: true })
@Entity('user_cart', { schema: 'public' })
export class UserCart {
  @Column('integer', { primary: true, name: 'cartId' })
  cartId: number;

  @Column('integer', { name: 'amount', default: () => '1' })
  amount: number;

  @ManyToOne(() => MainProductInfo, (mainProductInfo) => mainProductInfo.userCarts)
  @JoinColumn([{ name: 'mainProductId', referencedColumnName: 'mainProductId' }])
  mainProduct: MainProductInfo;

  @ManyToOne(() => UserInfomation, (userInfomation) => userInfomation.userCarts)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'userId' }])
  user: UserInfomation;
}
