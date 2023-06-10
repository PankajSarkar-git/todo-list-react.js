import React from 'react'

const RemoveAll = ({setFilterTodo,setTodo}) => {
    const RemoveAll = () => {
        setTodo([])
    }

  return (
    <>
    <div className="delete-contener">
      <button className='remove-all' onClick={RemoveAll}>Remove All</button>
      </div>
    </>
  )
}

export default RemoveAll;
