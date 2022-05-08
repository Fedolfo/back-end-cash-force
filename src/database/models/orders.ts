import IOrderAttributes from 'api/typescript/interfaces/models/ordersModel.interface';
import { Model, DataTypes } from 'sequelize'
import db from '.';
import Buyers from './buyers';
import Cnpjs from './cnpjs';
import Providers from './providers';
import Users from './users';

class Orders extends Model<IOrderAttributes> {
  declare id: number;
  declare orderNfId: string;
  declare orderNumber: string;
  declare orderPath: string;
  declare orderFileName: string;
  declare orderOriginalName: string;
  declare emissionDate: string;
  declare pdfFile: string;
  declare emitedTo: string;
  declare nNf: string;
  declare CTE: string;
  declare value: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
  declare cnpjId: number;
  declare userId: number;
  declare buyerId: number;
  declare providerId: number;
  declare orderStatusBuyer: string;
  declare orderStatusProvider: string;
  declare deliveryReceipt: string;
  declare cargoPackingList: string;
  declare deliveryCtrc: string;

}

Orders.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  orderNfId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderPath: {
    type: DataTypes.STRING,
  },
  orderFileName: {
    type: DataTypes.STRING,
  },
  orderOriginalName: {
    type: DataTypes.STRING,
  },
  emissionDate: {
    type: DataTypes.STRING,
  },
  pdfFile: {
    type: DataTypes.STRING,
  },
  emitedTo: {
    type: DataTypes.STRING,
  },
  nNf: {
    type: DataTypes.STRING,
  },
  CTE: {
    type: DataTypes.STRING,
  },
  value: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  cnpjId: {
    type: DataTypes.INTEGER,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  buyerId: {
    type: DataTypes.INTEGER,
  },
  providerId: {
    type: DataTypes.INTEGER,
  },
  orderStatusBuyer: {
    type: DataTypes.STRING,
    defaultValue: '0'
  },
  orderStatusProvider: {
    type: DataTypes.STRING,
    defaultValue: '0'
  },
  deliveryReceipt: {
    type: DataTypes.STRING,
  },
  cargoPackingList: {
    type: DataTypes.STRING,
  },
  deliveryCtrc: {
    type: DataTypes.STRING,
  },
}, { sequelize: db, modelName: 'orders' });

Orders.belongsTo(Buyers, {
  foreignKey: 'buyerId',
  as: 'buyer',
})

Orders.belongsTo(Providers, {
  foreignKey: 'providerId',
  as: 'provider',
})

Orders.belongsTo(Cnpjs, {
  foreignKey: 'cnpjId',
  as: 'cnpj',
})

Orders.belongsTo(Users, {
  foreignKey: 'userId',
  as: 'users',
})

export default Orders;