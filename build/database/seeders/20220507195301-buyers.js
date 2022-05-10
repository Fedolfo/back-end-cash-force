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
        yield queryInterface.bulkInsert('buyers', [{
                id: 1,
                name: 'SACADO 001',
                tradingName: 'SACADO 001 LTDA',
                cashforceTax: '0',
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
                phoneNumber: null,
                situation: null,
                createdAt: '2020-10-29 21:20:33',
                updatedAt: '2020-10-29 21:20:34',
                cnpjId: 1,
                confirm: 1,
                email: null,
            }], {});
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.bulkDelete('buyers', null, {});
    })
};
