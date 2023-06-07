import React from 'react';
import "./style.css";

const Form = ({ setInputText, setTodo, todo, inputText, setStatus }) => {

  // ------------------input handeler---------------------

  const inputtextHandler = (element) => {
    setInputText(element.target.value)
  };

  // --------------submit Todo Handler---------------
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("plesse fill the deta");
    }
    else{
      setTodo([
        ...todo, {
          text: inputText,
          completed: false,
          id: Math.random() * 1000
        }
      ]);
    }
    setInputText("");

  };

  // ----------------status Handeler-------------------------
  const statusHandeler = (e) => {
    setStatus(e.target.value)

  }

  
return (
  <>
    <form>
      <input type='text' value={inputText} className='todo-input' onChange={inputtextHandler} />
      <button className='todo-button' type='submit' onClick={submitTodoHandler}>
        <i className="fa-sharp fa-regular fa-plus"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandeler}>
          <option value="all" >All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  </>
)
}

export default Form;
