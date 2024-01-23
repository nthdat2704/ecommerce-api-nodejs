import { UserInfomation } from '@features/auth/models/userInfomation';
import { LaptopTechnicalspecsInfo } from '@features/products/models/laptopTechnicalspecsInfo';
import { PhoneTechnicalspecsInfo } from '@features/products/models/phoneTechnicalspecsInfo';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Index('product_reviews_pkey', ['reviewId'], { unique: true })
@Entity('product_reviews', { schema: 'public' })
export class ProductReviews {
  @Column('integer', { primary: true, name: 'reviewId' })
  reviewId: number;

  @Column('integer', { name: 'score' })
  score: number;

  @Column('character varying', { name: 'comment', nullable: true, length: 255 })
  comment: string | null;

  @Column('character varying', { name: 'media', nullable: true, length: 255 })
  media: string | null;

  @Column('boolean', { name: 'isShow', default: () => 'true' })
  isShow: boolean;

  @Column('timestamp without time zone', { name: 'createdAt' })
  createdAt: Date;

  @ManyToOne(() => LaptopTechnicalspecsInfo, (laptopInfo) => laptopInfo.productReviews)
  @ManyToOne(() => PhoneTechnicalspecsInfo, (phoneInfo) => phoneInfo.productReviews)
  @JoinColumn([{ name: 'laptopProductId', referencedColumnName: 'productId' }])
  laptopInfo: LaptopTechnicalspecsInfo;
  phoneInfo: PhoneTechnicalspecsInfo;

  @ManyToOne(() => UserInfomation, (userInfomation) => userInfomation.productReviews)
  @JoinColumn([{ name: 'userId', referencedColumnName: 'userId' }])
  user: UserInfomation;
}
