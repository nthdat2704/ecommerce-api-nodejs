import { Router } from 'express';
import { ROUTER } from '../constants/router';
import { mainCategoriesController } from '../controllers/mainCategories';
import { authMiddleware } from '@shared/globals/helpers/auth-middleware';
import { categoriesController } from '../controllers/categories';

class CategoriesRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  public routers() {
    this.router.get(ROUTER.createMainCategory, authMiddleware.verifyAuthorization, mainCategoriesController.create);
    this.router.post(ROUTER.createMainCategory, authMiddleware.verifyAuthorization, mainCategoriesController.create);
    this.router.post(ROUTER.updateMainCategory, authMiddleware.verifyAuthorization, mainCategoriesController.update);
    this.router.get(ROUTER.mainCategories, mainCategoriesController.read);
    this.router.get(ROUTER.categories, categoriesController.read);
    this.router.post(ROUTER.deleteMainCategory, authMiddleware.verifyAuthorization, mainCategoriesController.delete);
    return this.router;
  }
}

export const categoriesRouter: CategoriesRouter = new CategoriesRouter();
