import { authRouter } from '@features/auth/routers/auth.router';
import { BASE_PATH } from '@shared/constants/router';
import { Application } from 'express';

export const setupAppRouter = (app: Application) => {
  app.use(BASE_PATH, authRouter.registerRouter());
  app.use(BASE_PATH, authRouter.signInRouter());
};
