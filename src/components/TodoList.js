import React, {useContext} from 'react'
import TodoCard from "./TodoCard"
import { Context } from '../App'

import classes from './components.module.css'

const TodoList = ({ todoList, editTodo, deleteTodo, completedOnChange }) => {
  const {search} = useContext(Context)

  return (
    <div className={classes.flexList}>
      {
        todoList.length > 0 ? 
        todoList.map((todo, i) => 
          <TodoCard key={todo.date} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} completedOnChange={completedOnChange}/>
        )
      : search !== "" ? `По данному запросу ${search} ничего не найдено!!` :  "empty"
      }
    </div>
  )
}

export default TodoList