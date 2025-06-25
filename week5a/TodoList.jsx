import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          text={todo.text}
          completed={todo.completed}
          onToggle={() => toggleTodo(index)}
          onDelete={() => removeTodo(index)}
        />
      ))}
    </div>
  );
}

export default TodoList;

