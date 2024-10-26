import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

export interface TodoItemProps {
    id: number;
    title: string;
    description: string;
    onUpdate: (id: number, title: string, description: string) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, description, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedDescription, setEditedDescription] = useState(description);

    const handleEditClick = () => {
        setIsEditing(true); // 編集モードに切り替え
    };

    const handleSaveClick = () => {
        onUpdate(id, editedTitle, editedDescription); // 更新処理を呼び出し
        setIsEditing(false); // 編集モードを終了
    };

    const handleDeleteClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onDelete(id); // 削除処理を呼び出し
    };

    return (
        <Box p={2} border={1} borderRadius={4} mb={2}>
            {isEditing ? (
                <>
                    <TextField
                        label="Title"
                        variant="outlined"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <TextField
                        label="Description"
                        variant="outlined"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                    />
                    <Button onClick={handleSaveClick} variant="contained" color="primary">
                        Save
                    </Button>
                </>
            ) : (
                <>
                    <div onClick={handleEditClick}>
                        <Typography variant="h6">{title}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {description}
                        </Typography>
                        <Button data-testid={`delete-task-button-${title}`} onClick={handleDeleteClick} variant="outlined" color="secondary">
                            Delete
                        </Button>
                    </div>
                </>
            )}
        </Box>
    );
};

export default TodoItem;
