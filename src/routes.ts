import { authRouter } from '@features/auth/routers/auth.router';
import { brandsRouter } from '@features/brands/routers/brands.router';
import { categoriesRouter } from '@features/categories/routers/categories.router';
import { productsRouter } from '@features/products/routers/products.router';
import { BASE_PATH } from '@shared/constants/router';
import { Application } from 'express';

export const setupAppRouter = (app: Application) => {
  app.use(BASE_PATH, authRouter.routers());
  app.use(BASE_PATH, categoriesRouter.routers());
  app.use(BASE_PATH, brandsRouter.routers());
  app.use(BASE_PATH, productsRouter.routers());
};
