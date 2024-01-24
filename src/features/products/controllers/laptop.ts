import { MESSAGE } from '@shared/constants/message';
import { STATUS } from '@shared/constants/status';
import { joiValidation } from '@shared/globals/decorators/joi-validation.decorators';
import { BadRequestError, NotFoundError } from '@shared/globals/helpers/error-handler';
import { productsService } from '@shared/services/db/product.service';
import { ISuccessResponse } from '@shared/types/common';
import { Request, Response } from 'express';
import HTTP_STATUS from 'http-status-codes';
import { IProductData } from '../interfaces/products.interface';
import { LaptopTechnicalspecsInfo } from '../models/laptopTechnicalspecsInfo';
import { laptopSchema } from '../schemes/laptop';
class Laptops {
  @joiValidation(laptopSchema)
  public async create(req: Request, res: Response): Promise<void> {
    const plainProductData: LaptopTechnicalspecsInfo = req.body;
    const { name, mainCategory, subCategory, subSubCategory, brand } = plainProductData;
    const isExistingCategoryId = mainCategory || subCategory || subSubCategory;
    const isExistingBrandId = brand;
    if (!isExistingCategoryId) {
      throw new BadRequestError(MESSAGE.brandIdNotFound);
    }
    if (!isExistingBrandId) {
      throw new BadRequestError(MESSAGE.brandExists);
    }
    const isExistingProduct = await productsService.getProductByName(name, 'laptop');
    if (isExistingProduct) {
      throw new BadRequestError(MESSAGE.productExists);
    }
    const createdProduct = await productsService.createProduct(plainProductData, 'laptop');
    if (!createdProduct) {
      throw new BadRequestError(MESSAGE.errorInsert);
    }
    const responseData: ISuccessResponse<IProductData<LaptopTechnicalspecsInfo>> = {
      statusCode: 200,
      message: MESSAGE.createdSuccess,
      status: STATUS.success,
      data: {
        products: createdProduct,
        amount: 1
      }
    };
    res.status(HTTP_STATUS.CREATED).json(responseData);
  }
  public async update(req: Request, res: Response): Promise<void> {
    const plainProductData: Partial<LaptopTechnicalspecsInfo> = req.body;
    const { productId, ...updatedata } = plainProductData;
    if (!productId) {
      throw new BadRequestError(MESSAGE.invalidProductId);
    }
    const isExistingProduct = await productsService.getProductById(productId, 'laptop');

    if (!isExistingProduct) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const isUpdateSuccess = await productsService.updateProduct(productId, updatedata, 'laptop');
    if (!isUpdateSuccess) {
      throw new BadRequestError(MESSAGE.updateFail);
    }
    const updatedProduct = (await productsService.getProductById(productId, 'laptop')) as LaptopTechnicalspecsInfo;

    const responseData: ISuccessResponse<IProductData<LaptopTechnicalspecsInfo>> = {
      statusCode: 200,
      message: MESSAGE.successUpdate,
      status: STATUS.success,
      data: {
        products: updatedProduct,
        amount: 1
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
  public async read(req: Request, res: Response): Promise<void> {
    const products = await productsService.getProduct('laptop');
    if (!products) {
      throw new BadRequestError(MESSAGE.errorQuery);
    }
    const responseData: ISuccessResponse<IProductData<LaptopTechnicalspecsInfo[]>> = {
      statusCode: 200,
      status: STATUS.success,
      message: MESSAGE.successQuery,
      data: {
        products: products,
        amount: products.length
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
  public async readProductByBrand(req: Request, res: Response): Promise<void> {
    const plainProductData: Partial<LaptopTechnicalspecsInfo> = req.body;
    const { brand } = plainProductData;
    if (!brand) {
      throw new BadRequestError(MESSAGE.brandIdNotFound);
    }
    const products = await productsService.getProductByBrand(Number(brand), 'laptop');
    if (!products) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const responseData: ISuccessResponse<IProductData<LaptopTechnicalspecsInfo[]>> = {
      statusCode: 200,
      status: STATUS.success,
      message: MESSAGE.successQuery,
      data: {
        products: products,
        amount: products.length
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
  public async detail(req: Request, res: Response): Promise<void> {
    const plainProductData: Partial<LaptopTechnicalspecsInfo> = req.body;
    const { productId } = plainProductData;
    const product = await productsService.getProductById(Number(productId), 'laptop');
    if (!product) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const responseData: ISuccessResponse<IProductData<LaptopTechnicalspecsInfo>> = {
      statusCode: 200,
      status: STATUS.success,
      message: MESSAGE.successQuery,
      data: {
        products: product,
        amount: 1
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const plainProductData: LaptopTechnicalspecsInfo = req.body;
    const productId = plainProductData?.productId;
    if (!productId) {
      throw new BadRequestError(MESSAGE.invalidProductId);
    }
    const isExistingProduct = await productsService.getProductById(productId, 'laptop');
    if (!isExistingProduct) {
      throw new NotFoundError(MESSAGE.dataNotFound);
    }
    const isDeletedSuccess = await productsService.deleteProduct(productId, 'laptop');
    if (!isDeletedSuccess) {
      throw new BadRequestError(MESSAGE.deleteFail);
    }
    const listProducts = (await productsService.getProduct('laptop')) || [];
    const responseData: ISuccessResponse<IProductData<LaptopTechnicalspecsInfo[] | []>> = {
      statusCode: 200,
      message: MESSAGE.successdelete,
      status: STATUS.success,
      data: {
        products: listProducts,
        amount: listProducts.length
      }
    };
    res.status(HTTP_STATUS.ACCEPTED).json(responseData);
  }
}
export const laptopsController: Laptops = new Laptops();
