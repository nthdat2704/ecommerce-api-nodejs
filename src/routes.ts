import { authRouter } from '@features/auth/routers/auth.router';
import { categoriesRouter } from '@features/categories/routers/categories.router';
import { BASE_PATH } from '@shared/constants/router';
import { Application } from 'express';

export const setupAppRouter = (app: Application) => {
  app.use(BASE_PATH, authRouter.routers());
  app.use(BASE_PATH, categoriesRouter.routers());
};
