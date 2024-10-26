const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Todoモデルの定義
const Todo = sequelize.define('Todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Todo;
