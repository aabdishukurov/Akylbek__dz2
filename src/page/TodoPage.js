import { useState } from "react"
import ModalAdd from "../components/ModalAdd"
import TodoCard from "../components/TodoCard"
import TodoList from "../components/TodoList"
import Button from "../components/ui/Button"
import Input from "../components/ui/Input"

import classes from './todo.module.css'

const data = [
  {title: 'Важно', description: 'Сходить в магазин', date: 'Сегодня'}
]

const TodoPage = () => {

  const [todoList, setTodoList] = useState(data)
  const [inputValue, setInputValue] = useState('')
  const [dataForm, setDataForm] = useState({
    title: '',
    description: '',
  })
  const [isShow, setIsShow] = useState(false)

  const handleOnChange = (e) => {
    setDataForm(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  const handleShow = () => {
    setIsShow(prev => !prev)
    setDataForm({
      title: '',
      description: '',
    })
  }

  const submitData = () => {
    setTodoList(prev => {
      return [...prev, {...dataForm, date: Date()}]
    })
    handleShow()
  }

  const submitEditData = () => {
    const newList = todoList.map((todo) => {
      if (todo.date === dataForm.date) {
        return {...dataForm, date: Date()}
      } else {
        return todo
      }
    })
    setTodoList(newList)
    handleShow()
  }

  const editTodo = (todo) => {
    setIsShow(true)
    setDataForm({
      title: todo.title, 
      description: todo.description,
      date: todo.date
    })
  }

  const deleteTodo = (todo) => {
    const newList = todoList.filter((item) => {
      return item.date !== todo.date  
    })
    setTodoList(newList)
  }

  return (
    <>
      <Button handleDo={handleShow}>Добавить таск</Button>
      {isShow && (
        <ModalAdd closeWindow={handleShow}>
          <Input name='title' propsClass={'modalInput'} value={dataForm.title} handleOnChange={handleOnChange}/>
          <Input name='description' propsClass={'modalInput'} value={dataForm.description} handleOnChange={handleOnChange}/>
          {
            dataForm.date 
              ?
                <Button isModal={true} handleDo={submitEditData}>Редактировать</Button>
              :
                <Button isModal={true} handleDo={submitData}>Добавить таск</Button>
          }
        </ModalAdd>
      )}
      <Input propsClass={'inputSearch'} value={inputValue} handleOnChange={(e) => setInputValue(e.target.value)}/>
      <TodoList todoList={todoList} editTodo={editTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default TodoPage