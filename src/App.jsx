import './styles/input.css'


function Navigation(){

  return(
    <>
      <input type="text" />
      <button>add</button>
    </>
  )
}

function TodoList({ todoList }){
  let todoListjsx = todoList.map((todo) => (
    <li className="" key={todo.id}>
      <div className="note">{todo.note}</div>
      <input type="checkbox" />
    </li>
  ))
  
  return(
    <ul>{todoListjsx}</ul>
  )
}

function AdditionalTools(){
  return(
    <>
    <button>delete all checked</button>
    </>
    )
}

let todoList = [
  {note:"do my homework", isChecked:false, id:1},
  {note:"write an essay", isChecked:false, id:2},
  {note:"plant a tree", isChecked:false, id:3},
  {note:"grow a son", isChecked:false, id:4},
  {note:"build a house", isChecked:false, id:5},
  {note:"lorem ipsum", isChecked:false, id:6},
]

export default function App() {
  return (
    <div className="todo">
      <Navigation />
      <TodoList todoList={todoList}/> 
      <AdditionalTools />
    </div>
  );
}
