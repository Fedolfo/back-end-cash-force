'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkInsert('providers', [{
                id: 1,
                name: 'CEDENTE 002',
                tradingName: 'CEDENTE 002 LTDA',
                cashforceTax: null,
                responsibleName: null,
                responsibleEmail: null,
                responsiblePosition: null,
                responsiblePhone: null,
                responsibleMobile: null,
                website: null,
                postalCode: null,
                address: null,
                number: null,
                complement: null,
                neighborhood: null,
                city: null,
                state: null,
                bank: null,
                bankAgency: null,
                account: null,
                documents: null,
                phoneNumber: null,
                situation: null,
                situationDate: null,
                createdAt: '2020-10-29 21:22:21',
                updatedAt: '2020-10-29 21:22:22',
                cnpjId: 2,
                email: null
            }], {});
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('providers', null, {});
    })
};
