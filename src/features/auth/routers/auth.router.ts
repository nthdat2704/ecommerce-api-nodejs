import { Router } from 'express';
import { ROUTER } from '@features/auth/constants/router';
import { signupController } from '@features/auth/controllers/signup';
import { signinController } from '../controllers/signin';
import { signoutController } from '../controllers/signout';

class AuthRouter {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  public routers() {
    this.router.post(ROUTER.signup, signupController.create);
    this.router.post(ROUTER.signin, signinController.read);
    this.router.post(ROUTER.signout, signoutController.delete);
    return this.router;
  }
}

export const authRouter: AuthRouter = new AuthRouter();
