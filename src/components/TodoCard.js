

import classes from './components.module.css'

const TodoCard = ({ todo, editTodo, deleteTodo }) => {

  return (
    <div className={classes.todoCard}>
      <div className={classes.flex} onClick={() => editTodo(todo)}>
        <h3>{todo.title}</h3>
        <h3>{todo.description}</h3>
      </div>
      <div className={classes.flex}>
        <h3>{todo.date.length > 30 ? todo.date.slice(0, 30) + '...' : todo.date}</h3>
        <input type={'checkbox'}/>
        <button onClick={() => deleteTodo(todo)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoCard