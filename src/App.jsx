import './input.css'
import { useState, useEffect } from 'react';



function TodoList({ todos, setTodos}){
  let todoList = todos.map(todo => {
    return (
      <Todo 
        key={todo.note}
        todo={todo}
        setTodos={setTodos} 
        todos={todos}
      />
    );
  })
  return(
    <ul className='todo-list'>{todoList}</ul>
  )
}
function Todo({todo, setTodos, todos}) {
  
  const onChangeCheckBox = () => {
    const updatedTodos = todos.map(t => {
      if (t.note === todo.note) {
        return {
          ...t,
          isChecked: !t.isChecked  
        };
      }
      return t;
    });
  
    setTodos(updatedTodos);
  }
  return (
    <div className="custom-checkbox todo">
      <input
        type="checkbox"
        onChange={onChangeCheckBox}
        defaultValue={todo.isChecked}
      />
      <div className="svg-wrapper">
      <svg viewBox="0 0 60 40" aria-hidden="true" focusable="false"className='checkbox-svg'>
      <path
      className={todo.isChecked ? 'checkbox-checked' : ''}
      d="M21,2 C13.4580219,4.16027394 1.62349378,18.3117469 3,19 C9.03653312,22.0182666 25.2482171,10.3758914 30,8 C32.9363621,6.53181896 41.321398,1.67860195 39,4 C36.1186011,6.8813989 3.11316157,27.1131616 5,29 C10.3223659,34.3223659 30.6434647,19.7426141 35,18 C41.2281047,15.5087581 46.3445303,13.6554697 46,14 C42.8258073,17.1741927 36.9154967,19.650702 33,22 C30.3136243,23.6118254 17,31.162498 17,34 C17,40.4724865 54,12.4064021 54,17 C54,23.7416728 34,27.2286213 34,37"
      strokeWidth={4}
      fill="none"
      strokeDasharray={270}
      strokeDashoffset={270}
      />
    </svg>
    </div>
      <p className={todo.isChecked ? 'todo-note strikethrough' : 'todo-note'}>{todo.note}</p>
    </div>
  


  );
}
function Navigation({todos, setTodos}){
  const [error, setError] = useState(false);
  let [text, setText] = useState('')
  const handleTextChange = (e) => {
    setText(e.target.value)
  }
  const showError = () => {
    setError(true);
    setText('This TODO is already in the list');
    setTimeout(() => {
      setError(false);
      setText('');
    }, 2000); 
  }
  const handleAddTodo = () => {
    const duplicate = todos.some(todo => {
      return todo.note === text; 
    });
  
    if (duplicate) {
      showError();
      setText('');
      return;
    }
  
    const newTodo = {
      note: text,
      isChecked: false
    };
  
    setTodos([newTodo,...todos]);
    setText('');
  }
  return (
    <div className="nav-form" onKeyDown={e => {
      if(e.key === 'Enter') {
        handleAddTodo();}}}>
      <input 
        type="text-area"
        value={text}
        onChange={handleTextChange} 
        className={error ? 'nav-input text-red' : 'nav-input'}
        placeholder={error ? 'This TODO is already in the list' : ' Your TODO'}
        autoFocus
      />
      <button type="submit" className='nav-btn' onClick={handleAddTodo}>Add Todo</button>
    </div>
      
  )

}

function AdditionalTools({todos, setTodos}) {

  const isEverythingChecked = todos.every(todo => todo.isChecked)

  const handleToggleAll = () => {
    const newTodos = todos.map(todo => ({
      ...todo,
      isChecked: true 
    }));
    setTodos(newTodos);
  }
  const handleUntoggleAll = () => {
    const newTodos = todos.map(todo => ({
      ...todo,
      isChecked: false 
    }));
    
    setTodos(newTodos);
  }
  const handleDeleteChecked = () => {
    let newTodos = todos.filter(todo => !todo.isChecked)
    newTodos = newTodos.map(todo => {  
      return {
        ...todo,
        isChecked: false
      }
    });
    setTodos(newTodos)}
  return (
    <div className="additional-tools">
      <button onClick={handleDeleteChecked} className='aditional-btn delete-btn'>Delete all checked</button>
      <button 
        onClick={isEverythingChecked ? handleUntoggleAll : handleToggleAll}
        className={isEverythingChecked ? 'aditional-btn check-btn check-btn-green' : 'aditional-btn check-btn check-btn-red'}>
        {isEverythingChecked ? 'Uncheck All' : 'Check All'}  
      </button>
      
    </div>
  )
  }

export default function App() {

  const [todos, setTodos] = useState([
    ])
    useEffect(() => {

      const storedTodos = JSON.parse(localStorage.getItem('todos'));
    
      if (storedTodos) {
    
        const seen = new Set();
        const filtered = storedTodos.filter(todo => {
          const duplicate = seen.has(todo.note);
          seen.add(todo.note);
          return !duplicate;
        });
    
        if (storedTodos) {

          setTodos(prev => [...prev, ...storedTodos])
        
        }
      
      }
    
    }, []);
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

  return (
    <div className="todo-app">

      <Navigation className='navigation' todos={todos} setTodos={setTodos} />

      <TodoList  todos={todos} setTodos={setTodos}/>

      <AdditionalTools className='aditional-tools' todos={todos} setTodos={setTodos}/>

    </div>
  )

}