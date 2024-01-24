import { myShopDataSource } from '@/setupDatabase';
import { LaptopTechnicalspecsInfo } from '@features/products/models/laptopTechnicalspecsInfo';
import { PhoneTechnicalspecsInfo } from '@features/products/models/phoneTechnicalspecsInfo';
import { TProductsModelPayload, TProductsPartialModelPayload, TProductsTypePayload } from '@shared/types/products.interface';
import { Repository } from 'typeorm';
class Products {
  private laptopRepository: Repository<LaptopTechnicalspecsInfo>;
  private phoneRepository: Repository<PhoneTechnicalspecsInfo>;
  constructor() {
    this.laptopRepository = myShopDataSource.getRepository(LaptopTechnicalspecsInfo);
    this.phoneRepository = myShopDataSource.getRepository(PhoneTechnicalspecsInfo);
  }
  public async getProductByName(name: string, type: TProductsTypePayload = 'phone') {
    if (type === 'laptop') {
      try {
        const product = await this.laptopRepository.findOne({ where: { name: name } });
        return product;
      } catch (error) {
        console.log('error', error);
      }
    }
  }
  public async getProductById(id: number, type: TProductsTypePayload = 'phone') {
    if (type === 'laptop') {
      try {
        const product = await this.laptopRepository.findOne({ where: { productId: id } });
        return product;
      } catch (error) {
        console.log('error', error);
      }
    }
  }
  public async getProductByBrand(brandId: number, type: TProductsTypePayload = 'phone') {
    if (type === 'laptop') {
      try {
        const product = await this.laptopRepository.findBy({ brand: brandId });
        return product;
      } catch (error) {
        console.log('error', error);
      }
    }
  }
  public async getProduct(type: TProductsTypePayload = 'phone') {
    if (type === 'laptop') {
      try {
        const products = await this.laptopRepository.find();
        return products;
      } catch (error) {
        console.log('error', error);
      }
    }
  }
  public async createProduct(payload: TProductsModelPayload, type: TProductsTypePayload = 'phone') {
    if (type === 'laptop') {
      try {
        const createdProduct = await this.laptopRepository.save(payload);
        return createdProduct;
      } catch (error) {
        console.log('error', error);
      }
    }
  }
  public async updateProduct(productId: number, payload: TProductsPartialModelPayload, type: TProductsTypePayload = 'phone') {
    if (type === 'laptop') {
      try {
        const updateResult = await this.laptopRepository.update({ productId: productId }, payload);
        return updateResult;
      } catch (error) {
        console.log('error', error);
      }
    }
  }
  public async deleteProduct(productId: number | [], type: TProductsTypePayload = 'phone') {
    if (type === 'laptop') {
      try {
        const deleteResult = await this.laptopRepository.delete(productId);
        return deleteResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
  }
}
export const productsService = new Products();
