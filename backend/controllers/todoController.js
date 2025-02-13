const todoService = require('../services/todoService');
const Todo = require('../models/Todo');

// GET /todos
const getTodos = async (req, res) => {
    try {
        const todos = await todoService.getTodos();
        const formattedTodos = todos.map(todo => todo.toJSON());
        res.status(200).json(formattedTodos);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({message: 'Failed to retrieve todos'});
    }
};

// POST /todos
const addTodo = async (req, res) => {
    try {
        const { title, description } = req.body; // リクエストからデータを取得
        const newTodo = await Todo.create({ title, description });
        res.status(201).json(newTodo); // 201 Created ステータスを返す
    } catch (error) {
        console.error('Error adding todo:', error);
        res.status(500).json({ message: 'Failed to add todo' });
    }
};

// PUT /todos/:id
const updateTodo = (req, res) => {
    const updatedTodo = todoService.updateTodo(req.params.id, req.body);
    if (updatedTodo) {
        res.json(updatedTodo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
};

// DELETE /todos/:id
const deleteTodo = (req, res) => {
    const isDeleted = todoService.deleteTodo(req.params.id);
    if (isDeleted) {
        res.json({ message: 'Todo deleted' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
