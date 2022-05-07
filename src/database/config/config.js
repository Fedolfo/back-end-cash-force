require('dotenv').config();

module.exports = {
  username: process.env.DB_USER || 'username',
  password: process.env.DB_PASS || 'password',
  database: process.env.MYSQL_DB_NAME || 'nome do banco',
  host: process.env.DB_HOST || 'host',
  port: process.env.DB_PORT || 'porta do banco',
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};