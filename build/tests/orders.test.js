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
const chai_1 = __importDefault(require("chai"));
const shelljs_1 = require("shelljs");
const chai_http_1 = __importDefault(require("chai-http"));
const app_1 = require("../api/app");
const ordersList_1 = __importDefault(require("./mock/ordersList"));
chai_1.default.use(chai_http_1.default);
const { expect } = chai_1.default;
describe('orders endpoint', () => {
    let chaiHttpResponse;
    beforeEach(() => {
        (0, shelljs_1.exec)('npm run db:reset');
    });
    it('deve devolver todos os pedidos', () => __awaiter(void 0, void 0, void 0, function* () {
        chaiHttpResponse = yield chai_1.default.request(app_1.app).get('/orders');
        expect(chaiHttpResponse.status).to.equal(200);
        expect(chaiHttpResponse.body).to.deep.equal(ordersList_1.default);
    }));
});
