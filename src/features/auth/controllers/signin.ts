import { joiValidation } from '@shared/globals/decorators/joi-validation.decorators';
import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { authService } from '@shared/services/db/auth.service';
import { BadRequestError, NotAuthorizedError, NotFoundError } from '@shared/globals/helpers/error-handler';
import { config } from '@/config';
import { helpers } from '@shared/globals/helpers/helpers';
import { MESSAGE } from '@shared/constants/message';
import { signinSchema } from '../schemes/signin';
class SignIn {
  @joiValidation(signinSchema)
  public async read(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const userData = await authService.getUserByUsernameOrEmail(username);
    if (!userData) {
      throw new NotFoundError(MESSAGE.invalidCredentials);
    }
    const isCorrectPassword = helpers.checkPassword(password, userData.userPassword);
    if (!isCorrectPassword) {
      throw new NotAuthorizedError(MESSAGE.invalidCredentials);
    }
    const accessToken = helpers.createToken({ userName: userData.userName, isAdmin: userData.isAdmin }, config.ACCESS_TOKEN_SECRET_KEY, {
      expiresIn: '30m'
    });
    const refreshToken = helpers.createToken({ userName: userData.userName, isAdmin: userData.isAdmin }, config.REFRESH_TOKEN_SECRET_KEY, {
      expiresIn: '24h'
    });
    if (!refreshToken) {
      throw new BadRequestError(MESSAGE.errorInsert);
    }
    const updateRefreshTokenResult = await authService.updateTokenToDB(userData.userName, refreshToken);
    if (!updateRefreshTokenResult) {
      throw new BadRequestError(MESSAGE.errorInsert);
    }
    res.status(HTTP_STATUS.CREATED).json({ message: MESSAGE.signinSuccess, accessToken, refreshToken });
  }
}
export const signinController: SignIn = new SignIn();
