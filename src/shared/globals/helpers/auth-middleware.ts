import { config } from '@/config';
import { MESSAGE } from '@shared/constants/message';
import { TAccessToken } from '@shared/types/auth.interface';
import { NextFunction, Request, Response } from 'express';
import { BadRequestError, NotAuthorizedError } from './error-handler';
import { helpers } from './helpers';

class AuthMiddleware {
  public verifyUser(req: Request, res: Response, next: NextFunction): void {
    const plainAccessToken = req.headers.authorization;
    if (!plainAccessToken) {
      throw new BadRequestError(MESSAGE.invalidTokenOrExpired);
    }
    const accessToken = plainAccessToken.split(' ')[1];
    const verifyAccessToken = helpers.verifyToken(accessToken, config.ACCESS_TOKEN_SECRET_KEY) as TAccessToken;
    if (!verifyAccessToken) {
      throw new NotAuthorizedError(MESSAGE.invalidTokenOrExpired);
    }
    next();
  }
  public verifyAuthorization(req: Request, res: Response, next: NextFunction): void {
    const plainAccessToken = req.headers.authorization;
    if (!plainAccessToken) {
      throw new BadRequestError(MESSAGE.invalidTokenOrExpired);
    }
    const accessToken = plainAccessToken.split(' ')[1];
    const verifyAccessToken = helpers.verifyToken(accessToken, config.ACCESS_TOKEN_SECRET_KEY) as TAccessToken;
    if (!verifyAccessToken) {
      throw new NotAuthorizedError(MESSAGE.invalidTokenOrExpired);
    }
    const { isAdmin } = verifyAccessToken;
    if (!isAdmin) {
      throw new NotAuthorizedError(MESSAGE.accessDenied);
    }
    next();
  }
}

export const authMiddleware: AuthMiddleware = new AuthMiddleware();
