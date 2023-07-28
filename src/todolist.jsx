
export function TodoList({ todoList }){
    return(
      <ul>{todoList}</ul>
    )
  }

export function Todo({key, todo}) {
  return(
    <li key={key}>
      <div>{todo.note}</div>
      <input type="checkbox" value={todo.isChecked} />
    </li>
      
  )
}