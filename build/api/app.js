"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.App = void 0;
const express_1 = __importDefault(require("express"));
const domainError_1 = __importDefault(require("./middlewares/domainError"));
const routes_1 = __importDefault(require("./routes"));
require("express-async-errors");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routesConfig();
        this.errorDomain();
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express_1.default.json());
        this.app.use(accessControl);
    }
    routesConfig() {
        this.app.use(new routes_1.default().router);
    }
    errorDomain() {
        this.app.use(domainError_1.default.errorMiddleware);
    }
    start(PORT) {
        this.app.listen(PORT, () => {
            console.log('iniciado porta:', PORT);
        });
    }
}
exports.App = App;
exports.app = new App().app;
