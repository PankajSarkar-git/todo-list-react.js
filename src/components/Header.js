import React from 'react';
import "./style.css"
import logo from "./img/logo1.png"

const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="" className='logo' />
        <h1>Todo List</h1>
        <figcaption>Add your list here✌️</figcaption>
      </header>
    </>
  )
}

export default Header;
