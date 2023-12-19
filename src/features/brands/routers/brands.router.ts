import { Router } from 'express';

class BrandsRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
}

export const brandsRouter: BrandsRouter = new BrandsRouter();
