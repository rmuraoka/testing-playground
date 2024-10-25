import React from 'react';
import {Meta} from '@storybook/react';
import TodoList from "./TodoList";

const sampleTodos = [
    { id: 1, title: 'Sample Task 1', description: 'Description for task 1' },
    { id: 2, title: 'Sample Task 2', description: 'Description for task 2' },
];

export default {
    title: 'TodoList',
    component: TodoList,
} as Meta;

export const Default = () => <TodoList todos={sampleTodos}/>;
