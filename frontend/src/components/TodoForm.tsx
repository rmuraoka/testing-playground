import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface TodoFormProps {
    onAddTodo: (todo: { title: string; description?: string }) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSubmit = () => {
        if (title) {
            onAddTodo({ title, description });
            setTitle(''); // フォームをクリア
            setDescription(''); // フォームをクリア
        }
    };

    return (
        <Box display="flex" flexDirection="column" mb={2}>
            <TextField
                data-testid="title"
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                margin="normal"
            />
            <TextField
                data-testid="description"
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                margin="normal"
            />
            <Button
                data-testid="add-task-button"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Add Task
            </Button>
        </Box>
    );
};

export default TodoForm;
