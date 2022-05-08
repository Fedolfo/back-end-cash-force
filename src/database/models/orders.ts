import IOrderAttributes from 'database/interfaces/models/interfaceByOrders';
import { Model, DataTypes } from 'sequelize'
import db from '.';

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
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cnpjId: number;
  declare userId: number;
  declare buyerId: number;
  declare providerId: number;
  declare orderStatusBuyer: string;
  declare orderStatusProvider: string;
  declare deliveryReceipt: string;
  declare cargoPackingList: string;
  declare deliveryCtrc: string;

  static associate(models: any) {
    Orders.belongsTo(models.cnpjs, {
      foreignKey: 'cnpjId',
      as: 'cnpj',
    })

    Orders.belongsTo(models.users, {
      foreignKey: 'userId',
      as: 'user',
    })

    Orders.belongsTo(models.users, {
      foreignKey: 'buyerId',
      as: 'buyer',
    })

    Orders.belongsTo(models.providers, {
      foreignKey: 'providerId',
      as: 'provider',
    })
  }
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

export default Orders;