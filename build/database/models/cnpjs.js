"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class Cnpjs extends sequelize_1.Model {
}
Cnpjs.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
    },
    cnpj: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    companyType: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
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
}, { sequelize: _1.default, modelName: 'cnpjs' });
exports.default = Cnpjs;
