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
  public signUpRouter() {
    this.router.post(ROUTER.signup, signupController.create);
    return this.router;
  }
  public signInRouter() {
    this.router.post(ROUTER.signin, signinController.read);
    return this.router;
  }
  public signOutRouter() {
    this.router.post(ROUTER.signout, signoutController.delete);
    return this.router;
  }
}

export const authRouter: AuthRouter = new AuthRouter();
