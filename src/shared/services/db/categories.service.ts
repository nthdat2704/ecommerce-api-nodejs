import { myShopDataSource } from '@/setupDatabase';
import { MainCategories } from '@features/categories/models/mainCategories';
import { SubCategories } from '@features/categories/models/subCategories';
import { SubSubCategories } from '@features/categories/models/subSubCategories';
import { TCategoryTypePayload } from '@shared/types/categories.interface';
import { Repository } from 'typeorm';

class CategoriesService {
  private mainCategoriesRepository: Repository<MainCategories>;
  private subCategoriesRepository: Repository<SubCategories>;
  private subSubCategoriesRepository: Repository<SubSubCategories>;
  constructor() {
    this.mainCategoriesRepository = myShopDataSource.getRepository(MainCategories);
    this.subCategoriesRepository = myShopDataSource.getRepository(SubCategories);
    this.subSubCategoriesRepository = myShopDataSource.getRepository(SubSubCategories);
  }
  public async getCategories() {
    try {
      const categories = await this.mainCategoriesRepository.find({ relations: ['subCategories.subSubCategories'] });
      return categories;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async getAllCategoriesByType(
    type: TCategoryTypePayload = 'main'
  ): Promise<MainCategories[] | SubCategories[] | SubSubCategories[] | undefined> {
    if (type === 'sub') {
      try {
        const subCategoriesResult = await this.subCategoriesRepository.find();
        return subCategoriesResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    if (type === 'subsub') {
      try {
        const subsubCategoriesResult = await this.subSubCategoriesRepository.find();
        return subsubCategoriesResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    try {
      const categoriesResult = await this.mainCategoriesRepository.find();
      return categoriesResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async createCategory(
    payload: MainCategories | SubCategories | SubSubCategories,
    type: TCategoryTypePayload = 'main'
  ): Promise<MainCategories | SubCategories | SubSubCategories | undefined> {
    if (type === 'sub') {
      try {
        const subCategoryPayload = payload as SubCategories;
        const subCategoryResult = await this.subCategoriesRepository.save(subCategoryPayload);
        return subCategoryResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    if (type === 'subsub') {
      try {
        const subsubCategoryPayload = payload as SubSubCategories;
        const subsubCategoryResult = await this.subCategoriesRepository.save(subsubCategoryPayload);
        return subsubCategoryResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    try {
      const mainCategoryPayload = payload as MainCategories;
      const mainCategoryResult = await this.mainCategoriesRepository.save(mainCategoryPayload);
      return mainCategoryResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async getCategoryById(categoryId: number, type: TCategoryTypePayload = 'main') {
    if (type === 'sub') {
      try {
        const subCategoryResult = await this.subCategoriesRepository.findOne({ where: { subCategoryId: categoryId } });
        return subCategoryResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    if (type === 'subsub') {
      try {
        const subsubCategoryResult = await this.subSubCategoriesRepository.findOne({ where: { subSubCategoryId: categoryId } });
        return subsubCategoryResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    try {
      const categoryResult = await this.mainCategoriesRepository.findOne({ where: { mainCategoryId: categoryId } });

      return categoryResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async getCategoryByName(name: string, type: TCategoryTypePayload = 'main') {
    if (type === 'sub') {
      try {
        const subCategoryResult = await this.subCategoriesRepository.findOne({ where: { name: name } });
        return subCategoryResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    if (type === 'subsub') {
      try {
        const subsubCategoryResult = await this.subSubCategoriesRepository.findOne({ where: { name: name } });
        return subsubCategoryResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    try {
      const categoryResult = await this.mainCategoriesRepository.findOne({ where: { name: name } });

      return categoryResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async updateCategory(
    categoryId: number,
    payload: Partial<MainCategories> | Partial<SubCategories> | Partial<SubSubCategories>,
    type: TCategoryTypePayload = 'main'
  ) {
    if (type === 'sub') {
      try {
        const updateResult = await this.subCategoriesRepository.update({ subCategoryId: categoryId }, { ...payload });
        return updateResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    if (type === 'subsub') {
      try {
        const updateResult = await this.subSubCategoriesRepository.update({ subSubCategoryId: categoryId }, { ...payload });
        return updateResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    try {
      const updateResult = await this.mainCategoriesRepository.update({ mainCategoryId: categoryId }, { ...payload });
      return updateResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
  public async deleteCategory(categoryId: number | [], type: TCategoryTypePayload = 'main') {
    if (type === 'sub') {
      try {
        const deleteResult = await this.subCategoriesRepository.delete(categoryId);
        return deleteResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    if (type === 'subsub') {
      try {
        const deleteResult = await this.subCategoriesRepository.delete(categoryId);
        return deleteResult;
      } catch (error) {
        console.log('error:', error);
      }
    }
    try {
      const deleteResult = await this.mainCategoriesRepository.delete(categoryId);
      return deleteResult;
    } catch (error) {
      console.log('error:', error);
    }
  }
}
export const categoriesService: CategoriesService = new CategoriesService();
