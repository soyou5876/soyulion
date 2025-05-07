import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './assets/style.scss';
import plusIcon from './assets/img/plus.svg';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>TO-DO LIST</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="오늘 할 일을 입력해주세요!"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key ==='Enter') addTodo();
          }}
        />
     <img src={plusIcon} alt='추가' className='plusIcon' onClick={addTodo}/>
      </div>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;


