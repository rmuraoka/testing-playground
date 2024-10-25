const todoService = require('../services/todoService');

describe('Todo Service', () => {
    test('should return all todos', () => {
        const todos = todoService.getTodos();
        expect(todos.length).toBeGreaterThan(0);
    });

    test('should add a new todo', () => {
        const newTodo = { title: 'Test todo', description: 'This is a test todo' };
        const addedTodo = todoService.addTodo(newTodo);

        expect(addedTodo).toHaveProperty('id');
        expect(addedTodo.title).toBe('Test todo');
    });

    test('should update an existing todo', () => {
        const updatedTodo = todoService.updateTodo(1, { title: 'Updated title' });
        expect(updatedTodo).not.toBeNull();
        expect(updatedTodo.title).toBe('Updated title');
    });

    test('should return null for non-existing todo update', () => {
        const updatedTodo = todoService.updateTodo(999, { title: 'Non-existing' });
        expect(updatedTodo).toBeNull();
    });

    test('should delete an existing todo', () => {
        const isDeleted = todoService.deleteTodo(1);
        expect(isDeleted).toBe(true);
    });

    test('should return false for non-existing todo deletion', () => {
        const isDeleted = todoService.deleteTodo(999);
        expect(isDeleted).toBe(false);
    });
});
