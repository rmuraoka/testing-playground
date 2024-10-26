const Todo = require('../models/Todo');

// 全てのTodoを取得
const getTodos = async () => {
    return await Todo.findAll();
};

// Todoを追加
const addTodo = async (todo) => {
    return await Todo.create(todo);
};

// Todoを更新
const updateTodo = async (id, updatedTodo) => {
    const todo = await Todo.findByPk(id);
    if (todo) {
        await todo.update(updatedTodo);
        return todo;
    }
    return null;
};

// Todoを削除
const deleteTodo = async (id) => {
    const todo = await Todo.findByPk(id);
    if (todo) {
        await todo.destroy();
        return true;
    }
    return false;
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
