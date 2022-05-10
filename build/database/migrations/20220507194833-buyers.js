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
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable('buyers', {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false,
                    unique: true,
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                tradingName: {
                    type: Sequelize.STRING,
                },
                cashforceTax: {
                    type: Sequelize.STRING,
                },
                responsibleName: {
                    type: Sequelize.STRING,
                },
                responsibleEmail: {
                    type: Sequelize.STRING,
                },
                responsiblePosition: {
                    type: Sequelize.STRING,
                },
                responsiblePhone: {
                    type: Sequelize.STRING,
                },
                responsibleMobile: {
                    type: Sequelize.STRING,
                },
                website: {
                    type: Sequelize.STRING,
                },
                postalCode: {
                    type: Sequelize.STRING,
                },
                address: {
                    type: Sequelize.STRING,
                },
                number: {
                    type: Sequelize.STRING,
                },
                complement: {
                    type: Sequelize.STRING,
                },
                neighborhood: {
                    type: Sequelize.STRING,
                },
                city: {
                    type: Sequelize.STRING,
                },
                state: {
                    type: Sequelize.STRING,
                },
                phoneNumber: {
                    type: Sequelize.STRING,
                },
                situation: {
                    type: Sequelize.STRING,
                },
                createdAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW,
                    allowNull: false,
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW,
                    allowNull: false,
                },
                cnpjId: {
                    type: Sequelize.INTEGER,
                    references: {
                        key: 'id',
                        model: 'cnpjs',
                    },
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                confirm: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false,
                },
                email: {
                    type: Sequelize.STRING,
                },
            });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('buyers');
        });
    }
};
