const todoService = require('../services/todoService');

// GET /todos
const getTodos = (req, res) => {
    const todos = todoService.getTodos();
    res.json(todos);
};

// POST /todos
const addTodo = (req, res) => {
    const newTodo = todoService.addTodo(req.body);
    res.json(newTodo);
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
