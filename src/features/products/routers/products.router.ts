import { Router } from 'express';
import { ROUTER } from '../constants/router';
import { laptopsController } from '../controllers/laptop';

class ProductsRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  public routers() {
    this.router.post(ROUTER.createLaptop, laptopsController.create);
    this.router.post(ROUTER.updatelaptop, laptopsController.update);
    this.router.get(ROUTER.laptops, laptopsController.read);
    this.router.post(ROUTER.deletelaptop, laptopsController.delete);
    return this.router;
  }
}

export const productsRouter: ProductsRouter = new ProductsRouter();
