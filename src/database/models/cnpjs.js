module.exports = (sequelize, DataTypes) => {
  const cnpjs = sequelize.define('cnpjs', {
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
  });

  cnpjs.associate = (models) => {
    cnpjs.hasMany(models.buyers, {
      foreignKey: 'cnpjId',
      as: 'buyers',
    });
  }

  return cnpjs

}
