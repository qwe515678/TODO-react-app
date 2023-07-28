import './styles/input.css'
import { useState } from 'react';



function TodoList({ todos }){
  const [keyList, setKeyList] = useState([])
  let todoList=todos.map((todo) => {
    return (
      <Todo 
        key={todo.note} 
        todo={todo}
      />
    );

  })
  return(
    <ul>{todoList}</ul>
  )
}
function Todo({todo}) {
  const [isChecked, setIsChecked] = useState(todo.isChecked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    todo.isChecked = !isChecked;
  };

  return (
    <li>
      <label>{todo.note}</label>
      <input 
        type="checkbox"
        checked={isChecked}
        onChange={handleChange} 
      />
    </li>
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
    console.log("🚀 ~ file: App.jsx:70 ~ handleDeleteChecked ~ newTodos:", newTodos)
  }

  return (
    <button onClick={handleDeleteChecked}>Delete all checked</button>
  );

}

export default function App() {

  const [todos, setTodos] = useState([
    {note:"do my homework", isChecked:false},
    {note:"write an essay", isChecked:false},
    {note:"plant a tree", isChecked:false},
    {note:"grow a son", isChecked:false},
    {note:"build a house", isChecked:false},
    {note:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, maxime? Animi recusandae eligendi vitae, tempore dolorum asperiores quia labore. Est vero vitae debitis itaque quos reprehenderit modi distinctio aliquam aperiam!", isChecked:false},
  ])

  return (
    <div className="todo-app">

      <Navigation todos={todos} setTodos={setTodos} />

      <TodoList todos={todos}/>

      <AdditionalTools todos={todos} setTodos={setTodos}/>

    </div>
  )

}