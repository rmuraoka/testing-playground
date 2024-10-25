import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

const sampleTodos = [
    { id: 1, title: 'Sample Task 1', description: 'Description for task 1' },
    { id: 2, title: 'Sample Task 2', description: 'Description for task 2' },
];

describe('TodoList Component', () => {
    test('should display the correct number of tasks', () => {
        render(<TodoList todos={sampleTodos} />);

        // タスクのタイトルが表示されているかを確認
        const task1 = screen.getByText('Sample Task 1');
        const task2 = screen.getByText('Sample Task 2');
        expect(task1).toBeInTheDocument();
        expect(task2).toBeInTheDocument();

        // 各タスクの説明も確認
        const description1 = screen.getByText('Description for task 1');
        const description2 = screen.getByText('Description for task 2');
        expect(description1).toBeInTheDocument();
        expect(description2).toBeInTheDocument();
    });
});
