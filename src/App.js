import React, { useEffect, useState } from 'react'
import "./App.css"
import Header from './components/Header'
import Form from './components/Form'
import ToDoList from './components/ToDoList'
import RemoveAll from './components/RemoveAll'

// get localStorage data 
 
const getLoacldata = ( ) => {
  const list = localStorage.getItem("todoList");
  if (list) {
    return JSON.parse(list);
  } else {
    return "";
  }
}

const App = () => {
 
  // -------useState--------
  const [inputText, setInputText] = useState('');
  const [todo, setTodo] = useState(getLoacldata());
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);

  //------ useEffect---------- for filter todo-----------

  useEffect(() => {
    function filterTodoHandeler() {
      switch (status) {
        case "completed":
          setFilterTodo(todo.filter((item) => {
            return (
              item.completed === true
            )
          }))
          break;
  
        case 'uncompleted':
          setFilterTodo(todo.filter((item) => {
            return item.completed === false
          }))
          break;
  
        default:
          setFilterTodo(todo)
          break;
      }
    }
    filterTodoHandeler()
  },[todo, status])

  // -------------------add to localStorage --------------------------

useEffect(() => {
  localStorage.setItem('todoList' , JSON.stringify(filterTodo))
},[filterTodo])

  return (
    <>
      <div className="main-div">
        <Header />
        <Form inputText={inputText} setTodo={setTodo} todo={todo} setInputText={setInputText} setStatus={setStatus} />
        <ToDoList todo={todo} setTodo={setTodo} filterTodo={filterTodo} />
        <RemoveAll setFilterTodo={setFilterTodo} setTodo={setTodo}/>
      </div>

    </>
  )
}

export default App;
