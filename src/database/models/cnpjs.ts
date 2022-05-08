import ICnpjsAttributes from 'database/interfaces/models/interfaceByCnpjs';
import { Model, DataTypes } from 'sequelize';
import db from '.';

class Cnpjs extends Model<ICnpjsAttributes> {
  declare id: number;
  declare cnpj: string;
  declare companyType: string;
  declare createdAt: Date;
  declare updatedAt: Date;

  static associate(models: any) {
    Cnpjs.hasMany(models.buyers, {
      foreignKey: 'cnpjId',
      as: 'buyers',
    });
  };
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


