import express from 'express';
import DomainError from './middlewares/domainError';
import OrderRoute from './routes';
import 'express-async-errors';

class App {
  public app: express.Application = express();

  constructor() {
    this.config();
    this.routesConfig();
    this.errorDomain();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private routesConfig(): void {
    this.app.use(new OrderRoute().router);
  }

  private errorDomain(): void {
    this.app.use(DomainError.errorMiddleware);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => {
      console.log('iniciado porta:', PORT);
    });
  }
}

export { App };

export const { app } = new App();