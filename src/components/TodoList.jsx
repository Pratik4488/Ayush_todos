import React from 'react'

const TodoList = (props) => {
  return (
    <div className='todolist-container'>
        <input type="checkbox" name={props.index} id={props.index} />
        <div className="itemValue">
        {props.item}
        </div>
        <div className="btn" >Delete</div>
    </div>
  )
}

export default TodoList