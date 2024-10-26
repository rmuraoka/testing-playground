const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerOptions');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Swagger UIのセットアップ
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Todoのルート設定
app.use('/todos', todoRoutes);

module.exports = app;
