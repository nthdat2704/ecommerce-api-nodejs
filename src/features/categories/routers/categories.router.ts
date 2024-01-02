import { Router } from 'express';
import { signupController } from '@features/auth/controllers/signup';
import { ROUTER } from '../constants/router';
import { mainCategoriesController } from '../controllers/mainCategories';

class CategoriesRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  public routers() {
    this.router.post(ROUTER.createMainCategory, mainCategoriesController.create);
    this.router.post(ROUTER.updateMainCategory, mainCategoriesController.update);
    this.router.get(ROUTER.categories, mainCategoriesController.read);
    this.router.post(ROUTER.deleteMainCategory, mainCategoriesController.delete);
    return this.router;
  }
}

export const categoriesRouter: CategoriesRouter = new CategoriesRouter();
