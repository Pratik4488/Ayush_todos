import React from 'react'
import { MdDelete } from "react-icons/md";


const TodoList = (props) => {
  
  return (
    <li className="list-item">
         {props.item}
         <span className="date">
          <input type="date" name="" id="" />
         </span>
        <span className="checkbox">
            <input type="checkbox" />
        </span>
       
        <span className='icons'>
        <MdDelete  className="fa-solid fa-trash-can icon-delete" onClick={e=>{
            props.deleteItem(props.index)
        }}/>
        
        </span>
    </li>
  )
}

export default TodoList