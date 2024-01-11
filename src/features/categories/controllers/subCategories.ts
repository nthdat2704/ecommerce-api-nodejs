import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';
import { BadRequestError, NotFoundError } from '@shared/globals/helpers/error-handler';
import { joiValidation } from '@shared/globals/decorators/joi-validation.decorators';
import { ISuccessResponse } from '@shared/types/common';
import { ICategoriesData } from '../interfaces/categories.interface';
import { STATUS } from '@shared/constants/status';
import { categoriesService } from '@shared/services/db/categories.service';
import { MESSAGE } from '@shared/constants/message';
import { subCategorySchema } from '../schemes/subCategories';
import { SubCategories as SubCategoriesModel } from '../models/subCategories';
class SubCategories {
  @joiValidation(subCategorySchema)
  public async create(req: Request, res: Response): Promise<void> {
    const plainCategoryData: SubCategoriesModel = req.body;
    const { name } = plainCategoryData;
    const isExistingCategory = await categoriesService.getCategoryByName(name, 'sub');
    if (isExistingCategory) {
      throw new BadRequestError(MESSAGE.categoryExists);
    }
    const createdCategory = (await categoriesService.createCategory(plainCategoryData, 'sub')) as SubCategoriesModel | undefined;
    if (!createdCategory) {
      throw new BadRequestError(MESSAGE.errorInsert);
    }
    const responseData: ISuccessResponse<ICategoriesData<SubCategoriesModel>> = {
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
    const categories = (await categoriesService.getAllCategoriesByType('sub')) as SubCategoriesModel[] | undefined;
    if (!categories) {
      throw new BadRequestError(MESSAGE.errorQuery);
    }
    const responseData: ISuccessResponse<ICategoriesData<SubCategoriesModel[]>> = {
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
    const plainCategoryData: Partial<SubCategoriesModel> = req.body;
    const { subCategoryId, ...data } = plainCategoryData;
    if (!subCategoryId) {
      throw new BadRequestError(MESSAGE.invalidCategoryId);
    }
    const isExistingCategory = await categoriesService.getCategoryById(subCategoryId, 'sub');

    if (!isExistingCategory) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const isUpdateSuccess = await categoriesService.updateCategory(subCategoryId, data, 'sub');
    if (!isUpdateSuccess) {
      throw new BadRequestError(MESSAGE.updateFail);
    }
    const updatedCategory = await categoriesService.getCategoryById(subCategoryId, 'sub');

    const responseData: ISuccessResponse<ICategoriesData<SubCategoriesModel | null>> = {
      statusCode: 200,
      message: MESSAGE.successUpdate,
      status: STATUS.success,
      data: {
        categories: updatedCategory as SubCategoriesModel | null,
        amount: 1
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
  public async delete(req: Request, res: Response): Promise<void> {
    const plainCategoryData = req.body;
    const categoryId = plainCategoryData?.subCategoryId;
    if (!categoryId) {
      throw new BadRequestError(MESSAGE.invalidCategoryId);
    }
    const isExistingCategory = await categoriesService.getCategoryById(categoryId, 'sub');
    if (!isExistingCategory) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const isDeletedSuccess = await categoriesService.deleteCategory(categoryId, 'sub');
    if (!isDeletedSuccess) {
      throw new BadRequestError(MESSAGE.deleteFail);
    }
    const listCategories = (await categoriesService.getAllCategoriesByType('sub')) || [];
    const responseData: ISuccessResponse<ICategoriesData<SubCategoriesModel[] | []>> = {
      statusCode: 200,
      message: MESSAGE.successdelete,
      status: STATUS.success,
      data: {
        categories: listCategories as SubCategoriesModel[] | [],
        amount: listCategories.length
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
}
export const subCategoriesController: SubCategories = new SubCategories();
