"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const buyers_1 = __importDefault(require("./buyers"));
const cnpjs_1 = __importDefault(require("./cnpjs"));
const providers_1 = __importDefault(require("./providers"));
const users_1 = __importDefault(require("./users"));
class Orders extends sequelize_1.Model {
}
Orders.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    orderNfId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    orderNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    orderPath: {
        type: sequelize_1.DataTypes.STRING,
    },
    orderFileName: {
        type: sequelize_1.DataTypes.STRING,
    },
    orderOriginalName: {
        type: sequelize_1.DataTypes.STRING,
    },
    emissionDate: {
        type: sequelize_1.DataTypes.STRING,
    },
    pdfFile: {
        type: sequelize_1.DataTypes.STRING,
    },
    emitedTo: {
        type: sequelize_1.DataTypes.STRING,
    },
    nNf: {
        type: sequelize_1.DataTypes.STRING,
    },
    CTE: {
        type: sequelize_1.DataTypes.STRING,
    },
    value: {
        type: sequelize_1.DataTypes.STRING,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
        allowNull: false,
    },
    cnpjId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    buyerId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    providerId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    orderStatusBuyer: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: '0'
    },
    orderStatusProvider: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: '0'
    },
    deliveryReceipt: {
        type: sequelize_1.DataTypes.STRING,
    },
    cargoPackingList: {
        type: sequelize_1.DataTypes.STRING,
    },
    deliveryCtrc: {
        type: sequelize_1.DataTypes.STRING,
    },
}, { sequelize: _1.default, modelName: 'orders' });
Orders.belongsTo(buyers_1.default, {
    foreignKey: 'buyerId',
    as: 'buyer',
});
Orders.belongsTo(providers_1.default, {
    foreignKey: 'providerId',
    as: 'provider',
});
Orders.belongsTo(cnpjs_1.default, {
    foreignKey: 'cnpjId',
    as: 'cnpj',
});
Orders.belongsTo(users_1.default, {
    foreignKey: 'userId',
    as: 'users',
});
exports.default = Orders;
