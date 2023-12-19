import { joiValidation } from '@shared/globals/decorators/joi-validation.decorators';
import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { authService } from '@shared/services/db/auth.service';
class Cart {}
export const cartController: Cart = new Cart();
