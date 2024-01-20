import { Router } from 'express';
import { ROUTER } from '../constants/router';
import { brandsController } from '../controllers/brands';

class BrandsRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  public routers() {
    this.router.post(ROUTER.createBrand, brandsController.create);
    this.router.post(ROUTER.updateBrand, brandsController.update),
      this.router.get(ROUTER.brands, brandsController.read),
      this.router.post(ROUTER.deleteBrand, brandsController.delete);
    return this.router;
  }
}

export const brandsRouter: BrandsRouter = new BrandsRouter();
