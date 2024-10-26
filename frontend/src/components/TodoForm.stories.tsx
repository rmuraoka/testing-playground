import React from 'react';
import {Meta} from '@storybook/react';
import TodoForm from "./TodoForm";

export default {
    title: 'TodoFrom',
    component: TodoForm,
} as Meta;

export const Default = () =>
    <TodoForm
        onAddTodo={(todo) => console.log('Todo added:', todo)}
    />;
