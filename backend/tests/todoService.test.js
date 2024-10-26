const todoService = require('../services/todoService');
const Todo = require('../models/Todo');

// モデルをモック化
jest.mock('../models/Todo');

describe('Todo Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();  // 各テストの前にモックをリセット
    });

    test('should return all todos', async () => {
        const mockTodos = [{ id: 1, title: 'Test Todo', description: 'Test Description' }];
        Todo.findAll.mockResolvedValue(mockTodos);

        const todos = await todoService.getTodos();
        expect(Todo.findAll).toHaveBeenCalledTimes(1);
        expect(todos).toEqual(mockTodos);
    });

    test('should add a new todo', async () => {
        const newTodo = { title: 'New Todo', description: 'New Description' };
        const mockCreatedTodo = { id: 1, ...newTodo };
        Todo.create.mockResolvedValue(mockCreatedTodo);

        const createdTodo = await todoService.addTodo(newTodo);
        expect(Todo.create).toHaveBeenCalledWith(newTodo);
        expect(createdTodo).toEqual(mockCreatedTodo);
    });

    test('should update an existing todo', async () => {
        const updatedData = { title: 'Updated Todo', description: 'Updated Description' };
        const mockTodo = { id: 1, ...updatedData, update: jest.fn().mockResolvedValue(updatedData) };
        Todo.findByPk.mockResolvedValue(mockTodo);

        const updatedTodo = await todoService.updateTodo(1, updatedData);
        expect(Todo.findByPk).toHaveBeenCalledWith(1);
        expect(mockTodo.update).toHaveBeenCalledWith(updatedData);
        expect(updatedTodo).toEqual(mockTodo);
    });

    test('should delete an existing todo', async () => {
        const mockTodo = { id: 1, destroy: jest.fn().mockResolvedValue(true) };
        Todo.findByPk.mockResolvedValue(mockTodo);

        const result = await todoService.deleteTodo(1);
        expect(Todo.findByPk).toHaveBeenCalledWith(1);
        expect(mockTodo.destroy).toHaveBeenCalledTimes(1);
        expect(result).toBe(true);
    });

    test('should return null when updating a non-existing todo', async () => {
        Todo.findByPk.mockResolvedValue(null);

        const updatedTodo = await todoService.updateTodo(999, { title: 'Non-existing' });
        expect(Todo.findByPk).toHaveBeenCalledWith(999);
        expect(updatedTodo).toBeNull();
    });

    test('should return false when deleting a non-existing todo', async () => {
        Todo.findByPk.mockResolvedValue(null);

        const result = await todoService.deleteTodo(999);
        expect(Todo.findByPk).toHaveBeenCalledWith(999);
        expect(result).toBe(false);
    });
});
