import React from 'react';
import {Meta} from '@storybook/react';
import TodoItem from './TodoItem';

export default {
    title: 'TodoItem',
    component: TodoItem,
} as Meta;

export const Default = () =>
    <TodoItem
        id={1}
        title={'タイトル'}
        description={'本文'}
        onUpdate={() => {
            console.log('onUpdate');
        }}
    />;
