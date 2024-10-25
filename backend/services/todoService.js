let todos = [
    { id: 1, title: 'Learn Node.js', description: 'Study Node.js for backend development' },
    { id: 2, title: 'Build a todo app', description: 'Create a todo app with Express and React' },
];

// Todoの全件取得
const getTodos = () => {
    return todos;
};

// Todoの追加
const addTodo = (todo) => {
    const newTodo = { id: todos.length + 1, ...todo };
    todos.push(newTodo);
    return newTodo;
};

// Todoの更新
const updateTodo = (id, updatedTodo) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    if (todoIndex !== -1) {
        todos[todoIndex] = { ...todos[todoIndex], ...updatedTodo };
        return todos[todoIndex];
    }
    return null;
};

// Todoの削除
const deleteTodo = (id) => {
    const initialLength = todos.length;
    todos = todos.filter((todo) => todo.id != id);
    return todos.length < initialLength;
};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo };
