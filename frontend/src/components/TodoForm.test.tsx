import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('TodoForm', () => {
    it('renders correctly', () => {
        render(<TodoForm onAddTodo={jest.fn()} />);

        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
    });

    it('calls onAddTodo with the correct values', () => {
        const handleAddTodo = jest.fn();
        render(<TodoForm onAddTodo={handleAddTodo} />);

        // 入力値を設定
        fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'New Task' } });
        fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Task description' } });

        // ボタンをクリック
        fireEvent.click(screen.getByRole('button', { name: /add task/i }));

        // onAddTodoが正しい値で呼び出されたことを確認
        expect(handleAddTodo).toHaveBeenCalledWith({
            title: 'New Task',
            description: 'Task description',
        });
    });

    it('clears input fields after adding a task', () => {
        const handleAddTodo = jest.fn();
        render(<TodoForm onAddTodo={handleAddTodo} />);

        // 入力値を設定
        fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'New Task' } });
        fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Task description' } });

        // ボタンをクリック
        fireEvent.click(screen.getByRole('button', { name: /add task/i }));

        // 入力フィールドがクリアされていることを確認
        expect(screen.getByLabelText(/title/i)).toHaveValue('');
        expect(screen.getByLabelText(/description/i)).toHaveValue('');
    });
});
