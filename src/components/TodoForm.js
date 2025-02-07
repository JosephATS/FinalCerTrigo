
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [todoText, setTodoText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!todoText.trim()) return;
        addTodo(todoText);
        setTodoText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Agregar una nueva tarea"
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default TodoForm;