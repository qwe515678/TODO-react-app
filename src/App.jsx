import './styles/input.css'
import {TodoList, Todo}  from './todolist'
import { useState } from 'react';

function Navigation({todos, setTodos}){

  let [text, setText] = useState('')

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleAddTodo = () => {
    const newTodos = [...todos];
    newTodos.unshift({
      note: text,
      isChecked: false,
    });
    setTodos(newTodos);
    setText('');
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input 
        type="text"
        value={text}
        onChange={handleTextChange} 
      />
      <button type="submit">Add Todo</button>
    </form>
  )

}

function AdditionalTools(){

  return (
    <button>Delete all checked</button>
  )

}


export default function App() {

  const [todos, setTodos] = useState([
    {note:"do my homework", isChecked:false},
    {note:"write an essay", isChecked:false},
    {note:"plant a tree", isChecked:false},
    {note:"grow a son", isChecked:true},
    {note:"build a house", isChecked:false},
    {note:"lorem ipsum", isChecked:true},
  ])

  return (
    <div className="todo-app">

      <Navigation todos={todos} setTodos={setTodos} />

      <TodoList 
  todoList={todos.map((todo, index) => {

    const numberInArray = index + 1;

    return (
      <Todo 
        key={numberInArray} 
        todo={todo}
      />
    );

  })}/>

      <AdditionalTools />

    </div>
  )

}