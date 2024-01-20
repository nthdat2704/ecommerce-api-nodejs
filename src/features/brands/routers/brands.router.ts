import { Router } from 'express';
import { ROUTER } from '../constants/router';
import { brandsController } from '../controllers/brands';
import { authMiddleware } from '@shared/globals/helpers/auth-middleware';

class BrandsRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  public routers() {
    this.router.post(ROUTER.createBrand, authMiddleware.verifyAuthorization, brandsController.create);
    this.router.post(ROUTER.updateBrand, authMiddleware.verifyAuthorization, brandsController.update),
      this.router.get(ROUTER.brands, brandsController.read),
      this.router.post(ROUTER.deleteBrand, authMiddleware.verifyAuthorization, brandsController.delete);
    return this.router;
  }
}

export const brandsRouter: BrandsRouter = new BrandsRouter();
