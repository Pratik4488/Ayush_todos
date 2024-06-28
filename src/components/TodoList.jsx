import React from "react";
import { MdDelete } from "react-icons/md";

const TodoList = (props) => {
  return (
    <li className="list-item">
      <div className="item-container">
        <div className="list-content">
          <input type="checkbox" className="checkbox" />
          <div className="list-content-value">
            <h3>{props.item.title}</h3>
            <p> {props.item.desc}</p>
          </div>
        </div>

        <span className="status-text-container">
          <div className="item-date">{props.item.date}</div>
          <div className="item-status">
            {props.item.isCompleted ? "Completed" : "Pending"}
          </div>
        </span>
      </div>

      <span className="icons">
        <MdDelete
          className=" icon-delete"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        />
      </span>
    </li>
  );
};

export default TodoList;
