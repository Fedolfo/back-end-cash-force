import iUserAttributes from 'database/interfaces/models/interfaceByUsers';
import { Model, DataTypes } from 'sequelize';
import db from '.';

class Users extends Model<iUserAttributes> {
  declare id: number;
  declare name: string;
  declare email: string;
  declare phoneNumber: string;
  declare mobile: string;
  declare departament: string;
  declare verificationCode: string;
  declare emailChecked: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare cashforceAdm: boolean;
}

Users.init({
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
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  mobile: {
    type: DataTypes.STRING,
  },
  departament: {
    type: DataTypes.STRING,
  },
  verificationCode: {
    type: DataTypes.STRING,
  },
  emailChecked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
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
  cashforceAdm: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, { sequelize: db, modelName: 'users' });

export default Users;

