const { Sequelize } = require('sequelize');

// 環境変数からデータベースの接続情報を取得
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres', // PostgreSQLを指定
});

const connectWithRetry = async () => {
    for (let i = 0; i < 5; i++) {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            return;
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            await new Promise(resolve => setTimeout(resolve, 5000)); // 5秒待機
        }
    }
    throw new Error('Could not connect to the database after multiple attempts');
};

const checkDbConnection = async () => {
    try {
        await connectWithRetry();
    } catch (err) {
        console.error(err);
        process.exit(1); // エラーが発生した場合はプロセスを終了
    }
};

checkDbConnection();

module.exports = sequelize;
