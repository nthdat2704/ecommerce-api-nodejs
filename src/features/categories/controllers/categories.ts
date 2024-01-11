import { MESSAGE } from '@shared/constants/message';
import { STATUS } from '@shared/constants/status';
import { NotFoundError } from '@shared/globals/helpers/error-handler';
import { categoriesService } from '@shared/services/db/categories.service';
import { Request, Response } from 'express';
import HTTP_STATUS from 'http-status-codes';
class Categories {
  public async read(req: Request, res: Response): Promise<void> {
    const categories = await categoriesService.getCategories();
    if (!categories) {
      throw new NotFoundError(MESSAGE.errorQuery);
    }
    const responseData = {
      statusCode: 200,
      message: MESSAGE.successQuery,
      status: STATUS.success,
      data: {
        categories: categories,
        amount: categories.length
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
}
export const categoriesController: Categories = new Categories();
