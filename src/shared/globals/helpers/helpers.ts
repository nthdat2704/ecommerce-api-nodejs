import bcrypt from 'bcrypt';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
class Helpers {
  public isEmpty(obj: object) {
    return Object.keys(obj).length === 0;
  }
  public async hashPassword(password: string, salt_rounds: number = 10) {
    try {
      const hashPasswordResult = await bcrypt.hash(password, salt_rounds);
      return hashPasswordResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async checkPassword(plainPassword: string, hashPassword: string) {
    try {
      const checkPasswordResult = await bcrypt.compare(plainPassword, hashPassword);
      return checkPasswordResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public createToken(payload: string | object | Buffer, secretKey: Secret, options: SignOptions | undefined) {
    return jwt.sign(payload, secretKey, options);
  }
}
export const helpers = new Helpers();
