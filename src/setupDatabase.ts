import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from '@/config';

export const myShopDataSource = new DataSource({
  type: config.DB_TYPE,
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  entities: [
    'src/features/auth/models/*.{js,ts}',
    'src/features/brands/models/*.{js,ts}',
    'src/features/cart/models/*.{js,ts}',
    'src/features/categories/models/*.{js,ts}',
    'src/features/orders/models/*.{js,ts}',
    'src/features/products/models/*.{js,ts}',
    'src/features/reviews/models/*.{js,ts}'
  ],
  logging: true,
  synchronize: true
} as DataSourceOptions);

const connectDB = async () => {
  try {
    await myShopDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (err) {
    console.error('Error during Data Source initialization:', err);
  }
};

export default connectDB;
