import { myShopDataSource } from '@/setupDatabase';
import { Brands } from '@features/brands/models/brands';
import { Repository } from 'typeorm';

class BrandsService {
  private brandsRepository: Repository<Brands>;
  constructor() {
    this.brandsRepository = myShopDataSource.getRepository(Brands);
  }
  public async getBrandsByName(name: string) {
    try {
      const brandResult = await this.brandsRepository.findOne({ where: { name: name } });
      return brandResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async getBrands() {
    try {
      const brands = await this.brandsRepository.find();
      return brands;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async getBrandById(brandId: number) {
    try {
      const brandResult = await this.brandsRepository.findOne({ where: { brandId: brandId } });
      return brandResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async createBrand(payload: Brands): Promise<Brands | undefined> {
    try {
      const brandPayload = payload;
      const createdBrandResult = await this.brandsRepository.save(brandPayload);
      return createdBrandResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async updateBrand(brandId: number, payload: Partial<Brands>) {
    try {
      const updateResult = await this.brandsRepository.update({ brandId: brandId }, { ...payload });
      return updateResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async deleteBrand(brandId: number | []) {
    try {
      const deleteResult = await this.brandsRepository.delete(brandId);
      return deleteResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
}
export const brandsService = new BrandsService();
