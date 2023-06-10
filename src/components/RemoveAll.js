import React from 'react'

const RemoveAll = ({setFilterTodo}) => {
    const RemoveAll = () => {
        setFilterTodo([])
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
