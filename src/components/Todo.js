import React from 'react'
import "./style.css"

const Todo = ({text,todo,toDo,setTodo}) => {
    // event 
    // ----------------delete todo------------- 
    const deleteTodo = () => {
        setTodo(todo.filter((element) => {
           return(
               element.id !== toDo.id
           )
        }));
    };

    // --------------completed todo-------------------- 
    const completedTodo = () => {
        setTodo(todo.map((element) => {
            if (element.id === toDo.id) {
                return({
                    ...element, completed: !element.completed
                })
            }
            return element;
        }))
    }
    return (
        <>
            <div className={`todo ${toDo.completed ? "completed" : ""}`}>
                <li className={`${toDo.completed ? "completed-text" : ""}`}>{text}</li>
                <button onClick={completedTodo} className='complete-btn'><i className="fa-sharp fa-solid fa-check"></i></button>
                <button onClick={deleteTodo} className='trash-btn'><i className="fa-sharp fa-solid fa-trash"></i></button>
            </div>
        </>
    )
}

export default Todo;