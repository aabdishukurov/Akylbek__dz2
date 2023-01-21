import TodoCard from "./TodoCard"

import classes from './components.module.css'

const TodoList = ({ todoList, editTodo, deleteTodo }) => {

  return (
    <div className={classes.flexList}>
      {todoList.map((todo) => 
        <TodoCard todo={todo} editTodo={editTodo} deleteTodo={deleteTodo}/>
      )}
    </div>
  )
}

export default TodoList