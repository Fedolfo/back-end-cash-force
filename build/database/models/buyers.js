"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const cnpjs_1 = __importDefault(require("./cnpjs"));
class Buyers extends sequelize_1.Model {
}
Buyers.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tradingName: {
        type: sequelize_1.DataTypes.STRING,
    },
    cashforceTax: {
        type: sequelize_1.DataTypes.STRING,
    },
    responsibleName: {
        type: sequelize_1.DataTypes.STRING,
    },
    responsibleEmail: {
        type: sequelize_1.DataTypes.STRING,
    },
    responsiblePosition: {
        type: sequelize_1.DataTypes.STRING,
    },
    responsiblePhone: {
        type: sequelize_1.DataTypes.STRING,
    },
    responsibleMobile: {
        type: sequelize_1.DataTypes.STRING,
    },
    website: {
        type: sequelize_1.DataTypes.STRING,
    },
    postalCode: {
        type: sequelize_1.DataTypes.STRING,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
    },
    number: {
        type: sequelize_1.DataTypes.STRING,
    },
    complement: {
        type: sequelize_1.DataTypes.STRING,
    },
    neighborhood: {
        type: sequelize_1.DataTypes.STRING,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    situation: {
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
    confirm: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    }
}, { sequelize: _1.default, modelName: 'buyers' });
Buyers.belongsTo(cnpjs_1.default, {
    foreignKey: 'cnpjId',
    as: 'cnpj',
});
cnpjs_1.default.hasMany(Buyers, {
    foreignKey: 'cnpjId',
    as: 'buyers',
});
exports.default = Buyers;
