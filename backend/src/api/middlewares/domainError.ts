import { NextFunction, Request, Response } from 'express';

class DomainError {
  static errorMiddleware(err: Error, _req: Request, res: Response, next: NextFunction) {
    console.error(err);
    res.status(505).json({ message: 'Erro no servidor', err });
    next();
  }
}

export default DomainError;