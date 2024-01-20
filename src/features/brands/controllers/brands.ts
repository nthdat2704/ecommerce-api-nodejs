import { joiValidation } from '@shared/globals/decorators/joi-validation.decorators';
import HTTP_STATUS from 'http-status-codes';
import { brandSchema } from '../schemes/brands';
import { Brands as BrandsModel } from '../models/brands';
import { Request, Response } from 'express';
import { brandsService } from '@shared/services/db/brands.service';
import { BadRequestError, NotFoundError } from '@shared/globals/helpers/error-handler';
import { MESSAGE } from '@shared/constants/message';
import { ISuccessResponse } from '@shared/types/common';
import { STATUS } from '@shared/constants/status';
import { IBrandsData } from '../interfaces/brands.interface';

class Brands {
  @joiValidation(brandSchema)
  public async create(req: Request, res: Response): Promise<void> {
    const plainBrandData: BrandsModel = req.body;
    const { name, mainCategory, subCategory, subSubCategory } = plainBrandData;
    const isExistingCategoryId = mainCategory || subCategory || subSubCategory;
    if (!isExistingCategoryId) {
      throw new BadRequestError(MESSAGE.categoryIdNotFound);
    }
    const isExistingBrand = await brandsService.getBrandsByName(name);
    if (isExistingBrand) {
      throw new BadRequestError(MESSAGE.brandExists);
    }
    const createdBrand = await brandsService.createBrand(plainBrandData);
    if (!createdBrand) {
      throw new BadRequestError(MESSAGE.errorInsert);
    }
    const responseData: ISuccessResponse<IBrandsData<BrandsModel>> = {
      statusCode: 200,
      message: MESSAGE.createdSuccess,
      status: STATUS.success,
      data: {
        brands: createdBrand,
        amount: 1
      }
    };
    res.status(HTTP_STATUS.CREATED).json(responseData);
  }

  public async update(req: Request, res: Response): Promise<void> {
    const plainBrandData: Partial<BrandsModel> = req.body;
    const { brandId, ...data } = plainBrandData;
    if (!brandId) {
      throw new BadRequestError(MESSAGE.invalidBrandId);
    }
    const isExistingBrand = await brandsService.getBrandById(brandId);

    if (!isExistingBrand) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const isUpdateSuccess = await brandsService.updateBrand(brandId, data);
    if (!isUpdateSuccess) {
      throw new BadRequestError(MESSAGE.updateFail);
    }
    const updatedBrand = (await brandsService.getBrandById(brandId)) as BrandsModel | null;

    const responseData: ISuccessResponse<IBrandsData<BrandsModel | null>> = {
      statusCode: 200,
      message: MESSAGE.successUpdate,
      status: STATUS.success,
      data: {
        brands: updatedBrand,
        amount: 1
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }

  public async read(req: Request, res: Response): Promise<void> {
    const brands = await brandsService.getBrands();
    if (!brands) {
      throw new BadRequestError(MESSAGE.errorQuery);
    }
    const responseData: ISuccessResponse<IBrandsData<BrandsModel[]>> = {
      statusCode: 200,
      message: MESSAGE.successQuery,
      status: STATUS.success,
      data: {
        brands: brands,
        amount: brands.length
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const plainBrandData: BrandsModel = req.body;
    const brandId = plainBrandData?.brandId;
    if (!brandId) {
      throw new BadRequestError(MESSAGE.invalidBrandId);
    }
    const isExistingBrand = await brandsService.getBrandById(brandId);
    if (!isExistingBrand) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const isDeletedSuccess = await brandsService.deleteBrand(brandId);
    if (!isDeletedSuccess) {
      throw new BadRequestError(MESSAGE.deleteFail);
    }
    const listBrands = (await brandsService.getBrands()) || [];
    const responseData: ISuccessResponse<IBrandsData<BrandsModel[] | []>> = {
      statusCode: 200,
      message: MESSAGE.successdelete,
      status: STATUS.success,
      data: {
        brands: listBrands,
        amount: listBrands.length
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
}
export const brandsController: Brands = new Brands();
