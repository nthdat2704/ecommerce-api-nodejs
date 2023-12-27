import { UserInfomation } from '@features/auth/models/userInfomation';
import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('user_session_userName_key', ['userName'], {
  unique: true
})
@Index('user_session_pkey', ['tokenId'], { unique: true })
@Entity('user_session', { schema: 'public' })
export class UserSession {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'tokenId' })
  tokenId: number;

  @Column('character varying', { name: 'refreshToken', nullable: true, length: 255 })
  refreshToken: string | null;

  @OneToOne(() => UserInfomation, (userInfomation) => userInfomation.refreshToken, { nullable: false })
  @JoinColumn([{ name: 'userName', referencedColumnName: 'userName' }])
  userName: string;
}
