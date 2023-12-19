import { Application, Express, json, urlencoded, Request, Response, NextFunction } from 'express';
import { config } from '@/config';
import compression from 'compression';
import { setupAppRouter } from '@/routes';
import HTTP_STATUS from 'http-status-codes';
import { CustomerError, IErrorResponse } from '@shared/globals/helpers/error-handler';
import 'express-async-errors';
const SERVER_PORT = config.SERVER_PORT;
export class EcommerceServer {
  private app;
  constructor(app: Express) {
    this.app = app;
  }
  public start(): void {
    this.startStandardMiddleware(this.app);
    this.startRoutesMiddleware(this.app);
    this.globalErrorHandler(this.app);
    this.startServer(this.app);
  }
  private startServer(app: Express): void {
    app.listen(SERVER_PORT, () => {
      console.log(`Server is Fire at http://localhost:${SERVER_PORT}`);
    });
  }
  private startRoutesMiddleware(app: Application): void {
    setupAppRouter(app);
  }
  private startStandardMiddleware(app: Application): void {
    app.use(compression());
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));
  }
  private globalErrorHandler(app: Application): void {
    app.all('*', (req: Request, res: Response) => {
      res.status(HTTP_STATUS.NOT_FOUND).json({ message: `${req.originalUrl} not found` });
    });
    app.use((error: IErrorResponse, req: Request, res: Response, next: NextFunction) => {
      if (error instanceof CustomerError) {
        return res.status(error.statusCode).json(error.serializeErrors());
      }
    });
  }
}
