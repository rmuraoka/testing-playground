import React from 'react';
import {Container} from '@mui/material';
import {TodoListContainer} from './components/TodoList';

function App() {
    return (
        <Container maxWidth="sm">
            <TodoListContainer/>
        </Container>
    );
}

export default App;
