import dotenv from 'dotenv';
import { Secret } from 'jsonwebtoken';
import { DatabaseType } from 'typeorm';
dotenv.config();
class Config {
  public readonly SERVER_PORT: string | undefined;
  public readonly DATABASE_URL: string | undefined;
  public readonly JWT_TOKEN: string | undefined;
  public readonly NODE_ENV: string | undefined;
  public readonly CLIENT_URL: string | undefined;
  public readonly DB_TYPE: DatabaseType;
  public readonly DB_HOST: string | undefined;
  public readonly DB_PORT: string | undefined;
  public readonly DB_USERNAME: string | undefined;
  public readonly DB_PASSWORD: string | undefined;
  public readonly DB_NAME: string | undefined;
  public readonly SALT_ROUNDS: string | number;
  public readonly ACCESS_TOKEN_SECRET_KEY: Secret;
  public readonly REFRESH_TOKEN_SECRET_KEY: Secret;

  constructor() {
    this.SERVER_PORT = process.env.SERVER_PORT;
    this.DATABASE_URL = process.env.DATABASE_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN;
    this.NODE_ENV = process.env.NODE_ENV;
    this.CLIENT_URL = process.env.CLIENT_URL;
    this.DB_TYPE = process.env.DB_TYPE as DatabaseType;
    this.DB_HOST = process.env.DB_HOST;
    this.DB_PORT = process.env.DB_PORT;
    this.DB_USERNAME = process.env.DB_USERNAME;
    this.DB_PASSWORD = process.env.DB_PASSWORD;
    this.DB_NAME = process.env.DB_NAME;
    this.SALT_ROUNDS = process.env.SALT_ROUNDS as string | number;
    this.ACCESS_TOKEN_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY as Secret;
    this.REFRESH_TOKEN_SECRET_KEY = process.env.REFRESH_TOKEN_SECRET_KEY as Secret;
  }
}

export const config: Config = new Config();
