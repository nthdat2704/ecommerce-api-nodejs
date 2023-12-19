import { myShopDataSource } from '@/setupDatabase';
import { UserInfomation } from '@features/auth/models/userInfomation';
import { Repository } from 'typeorm';

class AuthService {
  private userRepository: Repository<UserInfomation>;
  constructor() {
    this.userRepository = myShopDataSource.getRepository(UserInfomation);
  }
  public async getUserByUsernameOrEmail(username: number) {
    const data = await this.userRepository.findOneBy({ userId: username });
    return data;
  }
}
export const authService: AuthService = new AuthService();
