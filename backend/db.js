const { Sequelize } = require('sequelize');

// 環境変数からデータベースの接続情報を取得
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres', // PostgreSQLを指定
});

module.exports = sequelize;
