import React from 'react';
import { Box, Typography } from '@mui/material';

export interface TodoItemProps {
    id: number;
    title: string;
    description: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, description }) => {
    return (
        <Box p={2} border={1} borderRadius={4} mb={2}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2" color="textSecondary">
                {description}
            </Typography>
        </Box>
    );
};

export default TodoItem;
