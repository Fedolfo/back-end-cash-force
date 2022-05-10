"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buyers_1 = __importDefault(require("../../database/models/buyers"));
const cnpjs_1 = __importDefault(require("../../database/models/cnpjs"));
const orders_1 = __importDefault(require("../../database/models/orders"));
const providers_1 = __importDefault(require("../../database/models/providers"));
const users_1 = __importDefault(require("../../database/models/users"));
class OrdersService {
    constructor() {
        this.orders = orders_1.default;
        this.buyers = buyers_1.default;
        this.providers = providers_1.default;
        this.cnpjs = cnpjs_1.default;
        this.users = users_1.default;
    }
    getAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.orders.findAll({
                include: [
                    {
                        model: this.buyers,
                        as: 'buyer',
                    },
                    {
                        model: this.providers,
                        as: 'provider',
                        all: true,
                    },
                    {
                        model: this.cnpjs,
                        as: 'cnpj',
                    },
                    {
                        model: this.users,
                        as: 'user',
                        all: true,
                    }
                ],
            })).map((order) => {
                return order.get({ plain: true });
            });
        });
    }
}
exports.default = OrdersService;
