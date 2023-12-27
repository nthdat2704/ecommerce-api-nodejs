import { myShopDataSource } from '@/setupDatabase';
import { IUserDataPayload } from '@features/auth/interfaces/auth.interface';
import { UserSession } from '@features/auth/models/sessions';
import { UserInfomation } from '@features/auth/models/userInfomation';
import { Repository } from 'typeorm';

class AuthService {
  private userRepository: Repository<UserInfomation>;
  private userSessionRepository: Repository<UserSession>;
  constructor() {
    this.userRepository = myShopDataSource.getRepository(UserInfomation);
    this.userSessionRepository = myShopDataSource.getRepository(UserSession);
  }
  public async getUserByUsernameOrEmail(username: string, email?: string) {
    try {
      const result = await this.userRepository.findOne({
        where: [{ userName: username }, { email: email }]
      });
      return result;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async addUserToDB(userData: IUserDataPayload) {
    try {
      const result = await this.userRepository.insert(userData);
      return result;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async getTokenFromDB(username: string) {
    try {
      const result = await this.userSessionRepository.findOne({ where: { userName: username } });
      return result;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async updateTokenToDB(username: string, token: string | null) {
    try {
      const exitsingUserSession = await this.userSessionRepository.findOne({ where: { userName: username } });
      if (exitsingUserSession) {
        const result = await this.userSessionRepository.update({ userName: username }, { refreshToken: token });
        return result;
      }
      const result = await this.userSessionRepository.insert({ userName: username, refreshToken: token });
      return result;
    } catch (error) {
      console.log('error:', error);
    }
  }
}
export const authService: AuthService = new AuthService();
