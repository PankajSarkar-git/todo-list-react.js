import React from 'react';
import "./style.css";
import Todo from './Todo';

const ToDoList = ({todo,setTodo,filterTodo}) => {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
        {filterTodo.map((toDo)=>(
          <Todo text={toDo.text} key={toDo.id} toDo={toDo} todo={todo} setTodo={setTodo}/>
          ))}
          </ul>
      </div>
    </>
  )
}

export default ToDoList;
