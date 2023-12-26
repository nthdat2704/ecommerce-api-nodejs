import bcrypt from 'bcrypt';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
class Helpers {
  public isEmpty(obj: object) {
    return Object.keys(obj).length === 0;
  }
  public async hashPassword(password: string, salt_rounds: number = 10) {
    const hashPasswordResult = await bcrypt.hash(password, salt_rounds);
    return hashPasswordResult;
  }
  public createToken(payload: string | object | Buffer, secretKey: Secret, options: SignOptions | undefined) {
    return jwt.sign(payload, secretKey, options);
  }
}
export const helpers = new Helpers();
