import { joiValidation } from '@shared/globals/decorators/joi-validation.decorators';
import { signupSchema } from '../schemes/signup';
import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { authService } from '@shared/services/db/auth.service';
class SignUp {
  @joiValidation(signupSchema)
  public async create(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    res.status(HTTP_STATUS.CREATED).json({ message: 'User created successfully' });
  }
}
export const signupController: SignUp = new SignUp();
