import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

// Todo型の定義
interface Todo {
    id: number;
    title: string;
    description: string;
}

interface TodoListProps {
    todos: Todo[];
    onUpdateClick: (id: number, title: string, description: string) => void; // 更新処理のためのプロパティ
}

// TodoListコンポーネント
const TodoList: React.FC<TodoListProps> = ({ todos, onUpdateClick }) => { // 修正: 引数をオブジェクトで受け取る
    return (
        <>
            <Box>
                {todos.map((todo) => (
                    <TodoItem
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                        onUpdate={onUpdateClick}
                    />
                ))}
            </Box>
        </>
    );
};

// TodoListContainerコンポーネント
export const TodoListContainer: React.FC = () => {
    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
        fetch(`${process.env.REACT_APP_API_URL}/todos`)
            .then((response) => response.json())
            .then((data) => setTodos(data))
            .catch((error) => console.error('Error fetching todos:', error));
    };

    const handleAddTodo = async (newTodo: { title: string; description?: string }) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        });

        if (response.ok) {
            fetchTodos();
        } else {
            console.error('Failed to add todo:', response.statusText);
        }
    };

    const handleUpdateTodo = async (id: number, title: string, description: string) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description }),
        });
        if (response.ok) {
            fetchTodos(); // 更新後にタスクを再取得
        }
    };

    useEffect(() => {
        fetchTodos(); // 初回マウント時にタスクを取得
    }, []);

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Todo List
            </Typography>
            <TodoForm onAddTodo={handleAddTodo} />
            <TodoList todos={todos} onUpdateClick={handleUpdateTodo}/>
        </Box>
    );
};

export default TodoList;

