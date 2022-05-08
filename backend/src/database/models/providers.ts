import IProvidersAttributes from 'api/typescript/interfaces/models/providersModel.interface';
import { Model, DataTypes } from 'sequelize'
import db from '.'

class Providers extends Model<IProvidersAttributes> {
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
  declare bank: string;
  declare bankAgency: string;
  declare account: string;
  declare documents: string;
  declare phoneNumber: string;
  declare situation: string;
  declare situationDate: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
  declare cnpjId: number;
  declare email: string;
}

Providers.init({
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
  bank: {
    type: DataTypes.STRING,
  },
  bankAgency: {
    type: DataTypes.STRING,
  },
  account: {
    type: DataTypes.STRING,
  },
  documents: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  situation: {
    type: DataTypes.STRING,
  },
  situationDate: {
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
  email: {
    type: DataTypes.STRING,
  }
}, { sequelize: db, modelName: 'providers' });

export default Providers;

