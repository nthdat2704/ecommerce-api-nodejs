import { Router } from 'express';
import { ROUTER } from '@features/auth/constants/router';
import { signupController } from '@features/auth/controllers/signup';

class ReviewsRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  public registerRouter() {
    this.router.post(ROUTER.signup, signupController.create);
    return this.router;
  }
}

export const reviewsRouter: ReviewsRouter = new ReviewsRouter();
