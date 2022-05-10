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
        yield queryInterface.createTable('orders', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true,
            },
            orderNfId: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            orderNumber: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            orderPath: {
                type: Sequelize.STRING,
            },
            orderFileName: {
                type: Sequelize.STRING,
            },
            orderOriginalName: {
                type: Sequelize.STRING,
            },
            emissionDate: {
                type: Sequelize.STRING,
            },
            pdfFile: {
                type: Sequelize.STRING,
            },
            emitedTo: {
                type: Sequelize.STRING,
            },
            nNf: {
                type: Sequelize.STRING,
            },
            CTE: {
                type: Sequelize.STRING,
            },
            value: {
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
                    model: 'cnpjs',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            buyerId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'buyers',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            providerId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'providers',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            orderStatusBuyer: {
                type: Sequelize.STRING,
                defaultValue: '0'
            },
            orderStatusProvider: {
                type: Sequelize.STRING,
                defaultValue: '0'
            },
            deliveryReceipt: {
                type: Sequelize.STRING,
            },
            cargoPackingList: {
                type: Sequelize.STRING,
            },
            deliveryCtrc: {
                type: Sequelize.STRING,
            },
        });
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.dropTable('orders');
    })
};
