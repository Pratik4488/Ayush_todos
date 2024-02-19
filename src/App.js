import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import TodoList from "./components/TodoList";

export default function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (todo) => {
    if (todo) {
      // setListTodo([...listTodo,todo]);
      setListTodo((pre) => {
        pre.push(todo);
        return pre;
      });
    }
    console.log(listTodo)
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="app-heading">TODO list...</h1>
        <hr style={{ marginBottom: "20px" }} />

        <Todos addList={addList} />

        {/* <table className="table">
              <thead>
                <tr >
                  <th className='tableRow'>Num</th>
                  <th className="w-50">Task</th>
                  <th className='tableRow'>Date</th>
                  <th className='tableRow'>Status</th>
                  <th className='tableRow'>Delete</th>
                </tr>
              </thead>
              <tbody id="tasksBody"></tbody>
            </table> */}
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}
