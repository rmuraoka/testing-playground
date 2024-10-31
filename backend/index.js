const app = require('./app');
const sequelize = require('./db');
const PORT = 5000;

const connectWithRetry = async () => {
    for (let i = 0; i < 5; i++) {
        try {
            await sequelize.authenticate(); // データベース接続の確認
            console.log('Connection has been established successfully.');
            return; // 成功したらリターン
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            await new Promise(resolve => setTimeout(resolve, 5000)); // 5秒待機
        }
    }
    throw new Error('Could not connect to the database after multiple attempts');
};

const initializeApp = async () => {
    try {
        await connectWithRetry(); // 接続を試みる
        await sequelize.sync(); // データベースを同期
        console.log('Database synchronized');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1); // エラーが発生した場合はプロセスを終了
    }
};

initializeApp();