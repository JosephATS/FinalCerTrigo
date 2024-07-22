
import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span
                        className={todo.completed ? 'completed' : ''}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.text}
                    </span>
                    <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                        Borrar
                    </button>
                    <span
                        className={`circle ${todo.completed ? 'completed' : ''}`}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        &#x2714; {}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;