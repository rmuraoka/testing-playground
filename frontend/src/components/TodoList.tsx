import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from '@mui/material';

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
    useEffect(() => {
        // バックエンドAPIへのリクエスト
        fetch(`${process.env.REACT_APP_API_URL}/todos`)
            .then((response) => response.json())
            .then((data) => setTodos(data))
            .catch((error) => console.error('Error fetching todos:', error));
    }, []);

    return (
        <Box>
            <TodoList todos={todos}/>
        </Box>
    );
};

export default TodoList;

