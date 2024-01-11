import { Router } from 'express';
import { ROUTER } from '../constants/router';
import { mainCategoriesController } from '../controllers/mainCategories';
import { authMiddleware } from '@shared/globals/helpers/auth-middleware';
import { categoriesController } from '../controllers/categories';
import { subCategoriesController } from '../controllers/subCategories';

class CategoriesRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  public routers() {
    this.router.get(ROUTER.categories, categoriesController.read);

    this.router.post(ROUTER.createMainCategory, authMiddleware.verifyAuthorization, mainCategoriesController.create);
    this.router.get(ROUTER.mainCategories, mainCategoriesController.read);
    this.router.post(ROUTER.updateMainCategory, authMiddleware.verifyAuthorization, mainCategoriesController.update);
    this.router.post(ROUTER.deleteMainCategory, authMiddleware.verifyAuthorization, mainCategoriesController.delete);

    this.router.post(ROUTER.createSubCategory, authMiddleware.verifyAuthorization, subCategoriesController.create);
    this.router.get(ROUTER.subCategories, subCategoriesController.read);
    this.router.post(ROUTER.updateSubCategory, authMiddleware.verifyAuthorization, subCategoriesController.update);
    this.router.post(ROUTER.deleteSubCategory, authMiddleware.verifyAuthorization, subCategoriesController.delete);
    return this.router;
  }
}

export const categoriesRouter: CategoriesRouter = new CategoriesRouter();
