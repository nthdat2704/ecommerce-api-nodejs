import { UserCart } from '@features/cart/models/userCart';
import { Orders } from '@features/orders/models/orders';
import { ProductReviews } from '@features/reviews/models/productReviews';
import { Column, Entity, Index, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserSession } from './sessions';

@Index('user_infomation_userName_email_key', ['email', 'userName'], {
  unique: true
})
@Index('user_infomation_pkey', ['userId'], { unique: true })
@Entity('user_infomation', { schema: 'public' })
export class UserInfomation {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'userId' })
  userId: number;

  @Column('character varying', { name: 'userName', unique: true, nullable: false, length: 30 })
  userName: string;

  @Column('character varying', { name: 'userPassword', length: 255 })
  userPassword: string;

  @Column('character varying', { name: 'name', length: 30 })
  name: string;

  @Column('character varying', { name: 'email', unique: true, length: 40 })
  email: string;

  @Column('character varying', { name: 'address', nullable: true, length: 70 })
  address: string | null;

  @Column('boolean', { name: 'active', default: () => 'false' })
  active: boolean;

  @Column('character varying', { name: 'birthday', nullable: true })
  birthday: string | null;

  @Column('character varying', { name: 'province', nullable: true, length: 30 })
  province: string | null;

  @Column('character varying', { name: 'district', nullable: true, length: 30 })
  district: string | null;

  @Column('character varying', { name: 'ward', nullable: true, length: 30 })
  ward: string | null;

  @Column('character varying', { name: 'avatar', nullable: true, length: 30 })
  avatar: string | null;
  @Column('boolean', { name: 'isAdmin', default: () => 'false' })
  isAdmin: boolean;

  @OneToOne(() => UserSession, (userSession) => userSession.userName)
  refreshToken: UserSession;

  @OneToMany(() => Orders, (orders) => orders.user)
  orders: Orders[];

  @OneToMany(() => ProductReviews, (productReviews) => productReviews.user)
  productReviews: ProductReviews[];

  @OneToMany(() => UserCart, (userCart) => userCart.user)
  userCarts: UserCart[];
}
