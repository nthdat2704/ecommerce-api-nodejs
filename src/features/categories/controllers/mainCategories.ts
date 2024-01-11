import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { categoriesService } from '@shared/services/db/categories.service';
import { BadRequestError, NotFoundError } from '@shared/globals/helpers/error-handler';
import { MESSAGE } from '@shared/constants/message';
import { joiValidation } from '@shared/globals/decorators/joi-validation.decorators';
import { MainCategories as MainCategoriesModel } from '../models/mainCategories';
import { mainCategorySchema } from '../schemes/categories';
import { ISuccessResponse } from '@shared/types/common';
import { IMainCategoriesData } from '../interfaces/categories.interface';
import { STATUS } from '@shared/constants/status';
class MainCategories {
  @joiValidation(mainCategorySchema)
  public async create(req: Request, res: Response): Promise<void> {
    const plainCategoryData: MainCategoriesModel = req.body;
    const { name } = plainCategoryData;
    const isExistingCategory = await categoriesService.getCategoryByName(name);
    if (isExistingCategory) {
      throw new BadRequestError(MESSAGE.categoryExists);
    }
    const createdCategory = await categoriesService.createCategory(plainCategoryData);
    if (!createdCategory) {
      throw new BadRequestError(MESSAGE.errorInsert);
    }
    const responseData: ISuccessResponse<IMainCategoriesData<MainCategoriesModel>> = {
      statusCode: 200,
      message: MESSAGE.createdSuccess,
      status: STATUS.success,
      data: {
        categories: createdCategory as MainCategoriesModel,
        amount: 1
      }
    };

    res.status(HTTP_STATUS.CREATED).json(responseData);
  }
  public async read(req: Request, res: Response): Promise<void> {
    const categories = await categoriesService.getAllCategoriesByType('main');
    if (!categories) {
      throw new BadRequestError(MESSAGE.errorQuery);
    }
    const responseData: ISuccessResponse<IMainCategoriesData<MainCategoriesModel[]>> = {
      statusCode: 200,
      message: MESSAGE.successQuery,
      status: STATUS.success,
      data: {
        categories: categories as MainCategoriesModel[],
        amount: categories.length
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }

  public async update(req: Request, res: Response): Promise<void> {
    const plainCategoryData: Partial<MainCategoriesModel> = req.body;
    const { mainCategoryId, ...data } = plainCategoryData;
    if (!mainCategoryId) {
      throw new BadRequestError(MESSAGE.invalidCategoryId);
    }
    const isExistingCategory = await categoriesService.getCategoryById(mainCategoryId);

    if (!isExistingCategory) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const isUpdateSuccess = await categoriesService.updateCategory(mainCategoryId, data);
    if (!isUpdateSuccess) {
      throw new BadRequestError(MESSAGE.updateFail);
    }
    const updatedCategory = await categoriesService.getCategoryById(isUpdateSuccess.affected!);

    const responseData: ISuccessResponse<IMainCategoriesData<MainCategoriesModel | null>> = {
      statusCode: 200,
      message: MESSAGE.successUpdate,
      status: STATUS.success,
      data: {
        categories: updatedCategory as MainCategoriesModel | null,
        amount: 1
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
  public async delete(req: Request, res: Response): Promise<void> {
    const plainCategoryData = req.body;
    const categoryId = plainCategoryData?.mainCategoryId;
    if (!categoryId) {
      throw new BadRequestError(MESSAGE.invalidCategoryId);
    }
    const isExistingCategory = await categoriesService.getCategoryById(categoryId);
    if (!isExistingCategory) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const isDeletedSuccess = await categoriesService.deleteCategory(categoryId);
    if (!isDeletedSuccess) {
      throw new BadRequestError(MESSAGE.deleteFail);
    }
    const listCategories = (await categoriesService.getAllCategoriesByType('main')) || [];
    const responseData: ISuccessResponse<IMainCategoriesData<MainCategoriesModel[] | []>> = {
      statusCode: 200,
      message: MESSAGE.successdelete,
      status: STATUS.success,
      data: {
        categories: listCategories as MainCategoriesModel[] | [],
        amount: listCategories.length
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
}
export const mainCategoriesController: MainCategories = new MainCategories();
