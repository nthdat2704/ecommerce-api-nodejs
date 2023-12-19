import connectDB from '@/setupDatabase';
import express, { Express } from 'express';
import { EcommerceServer } from '@/setupServer';
import { UserInfomation } from '@features/auth/models/userInfomation';

class Application {
  public initialize(): void {
    this.loadConfig();
    connectDB();
    const app: Express = express();
    const server: EcommerceServer = new EcommerceServer(app);
    server.start();
  }
  private loadConfig(): void {}
}

const application = new Application();
application.initialize();
