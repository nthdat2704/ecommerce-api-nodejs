import { joiValidation } from '@shared/globals/decorators/joi-validation.decorators';
import { signupSchema } from '../schemes/signup';
import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { authService } from '@shared/services/db/auth.service';
import { BadRequestError } from '@shared/globals/helpers/error-handler';
import { config } from '@/config';
import { IUserDataPayload } from '../interfaces/auth.interface';
import { helpers } from '@shared/globals/helpers/helpers';
import { MESSAGE } from '@shared/constants/message';
class SignUp {
  @joiValidation(signupSchema)
  public async create(req: Request, res: Response): Promise<void> {
    const { username, email, password, name } = req.body;
    const salt_rounds = 10;
    const checkIfUserExist = await authService.getUserByUsernameOrEmail(username, email);
    if (checkIfUserExist) {
      throw new BadRequestError(MESSAGE.invalidCredentials);
    }
    const hashPasswordResult = (await helpers.hashPassword(password, salt_rounds)) as string;
    const userData: IUserDataPayload = {
      userName: username,
      email,
      name,
      userPassword: hashPasswordResult
    };
    const insertUserResult = await authService.addUserToDB(userData);

    if (!insertUserResult) {
      throw new BadRequestError(MESSAGE.errorInsert);
    }
    const accessToken = helpers.createToken({ userName: userData.userName }, config.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '30s' });
    const refreshToken = helpers.createToken({ userName: userData.userName }, config.REFRESH_TOKEN_SECRET_KEY, { expiresIn: '24h' });
    if (!refreshToken) {
      throw new BadRequestError(MESSAGE.errorInsert);
    }
    const updateRefreshTokenResult = await authService.updateTokenToDB(userData.userName, refreshToken);
    if (!updateRefreshTokenResult) {
      throw new BadRequestError(MESSAGE.errorInsert);
    }
    res.status(HTTP_STATUS.CREATED).json({ message: MESSAGE.createdUser, accessToken, refreshToken });
  }
}
export const signupController: SignUp = new SignUp();
