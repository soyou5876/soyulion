import React from 'react';
import checkboxIcon from '../assets/img/Rectangle.svg';
import closeIcon from '../assets/img/eliminate.png';

function TodoItem({ text, completed, onToggle, onDelete }) {
  return (
    <div className="todo-item">
      <button className="check-btn" onClick={onToggle}>
        <img src={checkboxIcon} alt="완료" />
      </button>
      <span className={completed ? 'completed' : ''}>{text}</span>
      <button className="delete-btn" onClick={onDelete}>
        <img src={closeIcon} alt="삭제" />
      </button>
    </div>
  );
}

export default TodoItem;
