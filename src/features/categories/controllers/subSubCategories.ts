import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { BadRequestError, NotFoundError } from '@shared/globals/helpers/error-handler';
import { joiValidation } from '@shared/globals/decorators/joi-validation.decorators';
import { ISuccessResponse } from '@shared/types/common';
import { ICategoriesData } from '../interfaces/categories.interface';
import { STATUS } from '@shared/constants/status';
import { categoriesService } from '@shared/services/db/categories.service';
import { MESSAGE } from '@shared/constants/message';
import { subSubCategoriesSchema } from '../schemes/subSubCategories';
import { SubSubCategories as SubSubCategoriesModel } from '../models/subSubCategories';
class SubSubCategories {
  @joiValidation(subSubCategoriesSchema)
  public async create(req: Request, res: Response): Promise<void> {
    const plainCategoryData: SubSubCategoriesModel = req.body;
    const { name } = plainCategoryData;
    const isExistingCategory = await categoriesService.getCategoryByName(name, 'subsub');
    if (isExistingCategory) {
      throw new BadRequestError(MESSAGE.categoryExists);
    }
    const createdCategory = (await categoriesService.createCategory(plainCategoryData, 'subsub')) as SubSubCategoriesModel | undefined;
    if (!createdCategory) {
      throw new BadRequestError(MESSAGE.errorInsert);
    }
    const responseData: ISuccessResponse<ICategoriesData<SubSubCategoriesModel>> = {
      statusCode: 200,
      message: MESSAGE.createdSuccess,
      status: STATUS.success,
      data: {
        categories: createdCategory,
        amount: 1
      }
    };

    res.status(HTTP_STATUS.CREATED).json(responseData);
  }
  public async read(req: Request, res: Response): Promise<void> {
    const categories = (await categoriesService.getAllCategoriesByType('subsub')) as SubSubCategoriesModel[] | undefined;
    if (!categories) {
      throw new BadRequestError(MESSAGE.errorQuery);
    }
    const responseData: ISuccessResponse<ICategoriesData<SubSubCategoriesModel[]>> = {
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

  public async update(req: Request, res: Response): Promise<void> {
    const plainCategoryData: Partial<SubSubCategoriesModel> = req.body;
    const { subSubCategoryId, ...data } = plainCategoryData;
    if (!subSubCategoryId) {
      throw new BadRequestError(MESSAGE.invalidCategoryId);
    }
    const isExistingCategory = await categoriesService.getCategoryById(subSubCategoryId, 'subsub');

    if (!isExistingCategory) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const isUpdateSuccess = await categoriesService.updateCategory(subSubCategoryId, data, 'subsub');
    if (!isUpdateSuccess) {
      throw new BadRequestError(MESSAGE.updateFail);
    }
    const updatedCategory = await categoriesService.getCategoryById(subSubCategoryId, 'subsub');

    const responseData: ISuccessResponse<ICategoriesData<SubSubCategoriesModel | null>> = {
      statusCode: 200,
      message: MESSAGE.successUpdate,
      status: STATUS.success,
      data: {
        categories: updatedCategory as SubSubCategoriesModel | null,
        amount: 1
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
  public async delete(req: Request, res: Response): Promise<void> {
    const plainCategoryData = req.body;
    const categoryId = plainCategoryData?.subSubCategoryId;
    if (!categoryId) {
      throw new BadRequestError(MESSAGE.invalidCategoryId);
    }
    const isExistingCategory = await categoriesService.getCategoryById(categoryId, 'subsub');
    if (!isExistingCategory) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const isDeletedSuccess = await categoriesService.deleteCategory(categoryId, 'subsub');
    if (!isDeletedSuccess) {
      throw new BadRequestError(MESSAGE.deleteFail);
    }
    const listCategories = (await categoriesService.getAllCategoriesByType('subsub')) || [];
    const responseData: ISuccessResponse<ICategoriesData<SubSubCategoriesModel[] | []>> = {
      statusCode: 200,
      message: MESSAGE.successdelete,
      status: STATUS.success,
      data: {
        categories: listCategories as SubSubCategoriesModel[] | [],
        amount: listCategories.length
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
}
export const subSubCategoriesController: SubSubCategories = new SubSubCategories();
