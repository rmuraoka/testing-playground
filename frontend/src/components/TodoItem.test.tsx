import React from 'react';
import {render, screen} from '@testing-library/react';
import TodoItem from "./TodoItem";

describe('TodoItem Component', () => {
    test('should display the correct number of tasks', () => {
        render(
            <TodoItem
                id={1}
                title={'Sample Task'}
                description={'Description for task'}
                onUpdate={() => {}}
                onDelete={() => {}}
            />
        );

        // タスクのタイトルが表示されているかを確認
        const task = screen.getByText('Sample Task');
        expect(task).toBeInTheDocument();

        // 各タスクの説明も確認
        const description = screen.getByText('Description for task');
        expect(description).toBeInTheDocument();
    });
});
