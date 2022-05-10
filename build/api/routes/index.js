"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ordersController_1 = __importDefault(require("../controllers/ordersController"));
const commonRoutesConfig_1 = __importDefault(require("./commonRoutesConfig"));
class OrderRoute extends commonRoutesConfig_1.default {
    constructor() {
        super();
        this.ordersController = new ordersController_1.default();
        this.configureRoutes();
    }
    configureRoutes() {
        this.router.get('/orders', this.ordersController.getAllOrders);
    }
}
exports.default = OrderRoute;
