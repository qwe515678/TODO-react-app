import './styles/input.css'
import { useState, useEffect } from 'react';



function TodoList({ todos }){
  let todoList=todos.map((todo) => {
    return (
      <Todo
        key={todo.note} 
        todo={todo}
      />
    );

  })
  return(
    <ul className='todo-list'>{todoList}</ul>
  )
}
function Todo({todo}) {
  const onChangeCheckBox = function(){
    todo.isChecked = !todo.isChecked
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
      d="M21,2 C13.4580219,4.16027394 1.62349378,18.3117469 3,19 C9.03653312,22.0182666 25.2482171,10.3758914 30,8 C32.9363621,6.53181896 41.321398,1.67860195 39,4 C36.1186011,6.8813989 3.11316157,27.1131616 5,29 C10.3223659,34.3223659 30.6434647,19.7426141 35,18 C41.2281047,15.5087581 46.3445303,13.6554697 46,14 C42.8258073,17.1741927 36.9154967,19.650702 33,22 C30.3136243,23.6118254 17,31.162498 17,34 C17,40.4724865 54,12.4064021 54,17 C54,23.7416728 34,27.2286213 34,37"
      strokeWidth={4}
      fill="none"
      strokeDasharray={270}
      strokeDashoffset={270}
      />
    </svg>
    </div>
      <p className='todo-note'>{todo.note}</p>
    </div>
  


  );
}
function Navigation({todos, setTodos}){

  let [text, setText] = useState('')
  const handleTextChange = (e) => {
    setText(e.target.value)
  }
  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      note: text,
      isChecked: false
    };
  
    setTodos([newTodo,...todos]);
    setText('');
  }

  return (
    <form className='nav-form' onSubmit={handleAddTodo}>
      <input 
        type="text"
        value={text}
        onChange={handleTextChange} 
        className='nav-input'
        placeholder=' Your TODO'
        autoFocus
      />
      <button type="submit" className='nav-btn'>Add Todo</button>
    </form>
  )

}

function AdditionalTools({todos, setTodos}){

  const handleDeleteChecked = () => {

    let newTodos = todos.filter(todo => !todo.isChecked);
    
    // Reset checkboxes
    newTodos = newTodos.map(todo => {  
      return {
        ...todo,
        isChecked: false
      }
    });
    setTodos(newTodos)
  }

  return (
    <button onClick={handleDeleteChecked} className='aditional-btn'>Delete all checked</button>
  );

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
    
        setTodos(prev => [...prev, ...filtered]);
      
      }
    
    }, []);
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

  return (
    <div className="todo-app">

      <Navigation className='navigation' todos={todos} setTodos={setTodos} />

      <TodoList  todos={todos}/>

      <AdditionalTools className='aditional-tools' todos={todos} setTodos={setTodos}/>

    </div>
  )

}