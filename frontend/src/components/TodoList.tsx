import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import TodoForm from "./TodoForm";

// Todo型の定義
interface Todo {
    id: number;
    title: string;
    description: string;
}

// TodoListコンポーネント
const TodoList: React.FC<{ todos: Todo[] }> = ({todos}) => {

    return (
        <>
            <Box>
                {todos.map((todo) => (
                    <Box key={todo.id} p={2} border={1} borderRadius={4} mb={2}>
                        <Typography variant="h6">{todo.title}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {todo.description}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Button variant="contained" color="primary">
                Add Task
            </Button>
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

    useEffect(() => {
        fetchTodos(); // 初回マウント時にタスクを取得
    }, []);

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Todo List
            </Typography>
            <TodoForm onAddTodo={handleAddTodo} />
            <TodoList todos={todos}/>
        </Box>
    );
};

export default TodoList;

