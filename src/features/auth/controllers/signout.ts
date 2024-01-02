import { joiValidation } from '@shared/globals/decorators/joi-validation.decorators';
import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { authService } from '@shared/services/db/auth.service';
import { BadRequestError, NotAuthorizedError, NotFoundError } from '@shared/globals/helpers/error-handler';
import { config } from '@/config';
import { helpers } from '@shared/globals/helpers/helpers';
import { MESSAGE } from '@shared/constants/message';
import { signoutSchema } from '../schemes/signout';
import { TRefreshToken } from '../interfaces/auth.interface';
class SignOut {
  @joiValidation(signoutSchema)
  public async delete(req: Request, res: Response): Promise<void> {
    const { refreshToken: clientRefreshToken } = req.body;
    const verifyRefreshTokenResult = helpers.verifyToken(clientRefreshToken, config.REFRESH_TOKEN_SECRET_KEY) as TRefreshToken;
    if (!verifyRefreshTokenResult) {
      throw new BadRequestError(MESSAGE.invalidRefreshTokenOrExpired);
    }
    const { userName } = verifyRefreshTokenResult;
    const userToken = await authService.getTokenFromDB(userName);
    if (!userToken) {
      throw new NotFoundError(MESSAGE.userNotFound);
    }
    const { refreshToken } = userToken;
    if (clientRefreshToken !== refreshToken) {
      throw new NotAuthorizedError(MESSAGE.invalidRefreshTokenOrExpired);
    }
    const updateRefreshTokenResult = await authService.updateTokenToDB(userName, null);
    if (!updateRefreshTokenResult) {
      throw new BadRequestError(MESSAGE.errorInsert);
    }
    res.status(HTTP_STATUS.CREATED).json({ message: MESSAGE.signoutSuccess });
  }
}
export const signoutController: SignOut = new SignOut();
