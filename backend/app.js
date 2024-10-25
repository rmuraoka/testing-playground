const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

// ミドルウェア
const allowedOrigin = 'http://localhost:3000';
app.use(cors({
    origin: allowedOrigin, // CORSの許可オリジンを設定
    credentials: true // フロントエンドのURL
}));
app.use(bodyParser.json());

// ルートの設定
app.use('/todos', todoRoutes);

module.exports = app;

