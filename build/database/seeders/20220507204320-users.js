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
        yield queryInterface.bulkInsert('users', [{
                id: 1,
                name: 'ALLAN SOUZA',
                email: 'allan@cashforce.com.br',
                phoneNumber: null,
                mobile: null,
                departament: null,
                verificationCode: '',
                emailChecked: 1,
                createdAt: '2020-10-01 21:31:37',
                updatedAt: '2020-10-01 22:41:23',
                cashforceAdm: 1,
            }], {});
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    })
};
