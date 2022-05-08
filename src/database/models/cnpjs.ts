import ICnpjsAttributes from 'api/typescript/interfaces/models/cnpjsModel.interface';
import { Model, DataTypes } from 'sequelize';
import db from '.';

class Cnpjs extends Model<ICnpjsAttributes> {
  declare id: number;
  declare cnpj: string;
  declare companyType: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

Cnpjs.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  companyType: {
    type: DataTypes.STRING,
    allowNull: false,
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
}, { sequelize: db, modelName: 'cnpjs' });

export default Cnpjs;


