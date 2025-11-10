import React from 'react';

interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({id, title, completed}) => {
    return (
        <li>
            <input type='checkbox' checked={completed}/>
            <span>title</span>
            <span>&times;</span>
        </li>
    );
}

export default TodoItem;