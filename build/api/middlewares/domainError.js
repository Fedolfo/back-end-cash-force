"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DomainError {
    static errorMiddleware(err, _req, res, next) {
        console.error(err);
        res.status(505).json({ message: 'Erro no servidor', err });
        next();
    }
}
exports.default = DomainError;
