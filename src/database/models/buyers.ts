import IBuyersAttributes from 'api/typescript/interfaces/models/buyersModel.interface';
import { Model, DataTypes } from 'sequelize';
import db from '.';
import Cnpjs from './cnpjs';

class Buyers extends Model<IBuyersAttributes> {
  declare id: number;
  declare name: string;
  declare tradingName: string;
  declare cashforceTax: string;
  declare responsibleName: string;
  declare responsibleEmail: string;
  declare responsiblePosition: string;
  declare responsiblePhone: string;
  declare responsibleMobile: string;
  declare website: string;
  declare postalCode: string;
  declare address: string;
  declare number: string;
  declare complement: string;
  declare neighborhood: string;
  declare city: string;
  declare state: string;
  declare phoneNumber: string;
  declare situation: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
  declare cnpjId: number;
  declare confirm: boolean;
  declare email: string;

}

Buyers.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tradingName: {
    type: DataTypes.STRING,
  },
  cashforceTax: {
    type: DataTypes.STRING,
  },
  responsibleName: {
    type: DataTypes.STRING,
  },
  responsibleEmail: {
    type: DataTypes.STRING,
  },
  responsiblePosition: {
    type: DataTypes.STRING,
  },
  responsiblePhone: {
    type: DataTypes.STRING,
  },
  responsibleMobile: {
    type: DataTypes.STRING,
  },
  website: {
    type: DataTypes.STRING,
  },
  postalCode: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.STRING,
  },
  complement: {
    type: DataTypes.STRING,
  },
  neighborhood: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  situation: {
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
  confirm: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  email: {
    type: DataTypes.STRING,
  }
}, { sequelize: db, modelName: 'buyers' });

Buyers.belongsTo(Cnpjs, {
  foreignKey: 'cnpjId',
  as: 'cnpj',
});

Cnpjs.hasMany(Buyers, {
  foreignKey: 'cnpjId',
  as: 'buyers',
});

export default Buyers;

