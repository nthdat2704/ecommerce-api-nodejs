import { Router } from 'express';
import { ROUTER } from '../constants/router';
import { mainCategoriesController } from '../controllers/mainCategories';
import { authMiddleware } from '@shared/globals/helpers/auth-middleware';
import { categoriesController } from '../controllers/categories';
import { subCategoriesController } from '../controllers/subCategories';
import { subSubCategoriesController } from '../controllers/subSubCategories';

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

    this.router.post(ROUTER.createSubSubCategory, authMiddleware.verifyAuthorization, subSubCategoriesController.create);
    this.router.get(ROUTER.subSubCategories, subSubCategoriesController.read);
    this.router.post(ROUTER.updateSubSubCategory, authMiddleware.verifyAuthorization, subSubCategoriesController.update);
    this.router.post(ROUTER.deleteSubSubCategory, authMiddleware.verifyAuthorization, subSubCategoriesController.delete);
    return this.router;
  }
}

export const categoriesRouter: CategoriesRouter = new CategoriesRouter();
