import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import TodoList from "./components/TodoList";

export default function App() {
  const list = [
    {
      title: "task1",
      date: "2024-02-16",
      desc: "ahahahahha",
      isCompleted: false,
    },
    {
      title: "task2",
      date: "2024-02-16",
      desc: "ahahahahha",
      isCompleted: false,
    },
    {
      title: "task3",
      date: "2024-02-16",
      desc: "ahahahahha",
      isCompleted: false,
    },
    {
      title: "task4",
      date: "2024-02-16",
      desc: "ahahahahha",
      isCompleted: false,
    },
    {
      title: "task5",
      date: "2024-02-16",
      desc: "ahahahahha",
      isCompleted: false,
    },
  ];
  function addNewList (title,date,desc){
        const newObj = {
            title,date,desc
        }
        list =[...list,newObj]
      }
  const [listTodo, setListTodo] = useState([...list]);
  // const [searchValue, setsearchValue] = useState("");
  // const [searchFilter, setsearchFilter] = useState("all");
  const [filteredList, setfilteredList] = useState([...listTodo]);
  useEffect(() => {
    setfilteredList(listTodo)
    console.log(filteredList);
  }, [listTodo,setListTodo]);

  const searchRef = useRef("");
  const filterRef = useRef("all");
  console.log(listTodo)

  let addList = (todo) => {
    if (todo) {
      // setListTodo([...listTodo,todo]);
      setListTodo((pre) => {
        pre.push(todo);
        return pre;
      });
    }
    console.log(listTodo);
   
  };
  
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
    setfilteredList([...newListTodo]);
  };
  //   const handleOnChange = (event) => {
  //     console.log(event.target.value);
  // }
  const handleOnSearch = (event) => {
    console.log(searchRef.current.value, filterRef.current.value);
    const result = listTodo.filter((todo) => {
      if (filterRef.current.value === "completed")
        return (
          todo.title.includes(searchRef.current?.value) && todo.isCompleted
        );
      else if (filterRef.current.value === "pending")
        return (
          todo.title.includes(searchRef.current?.value) && !todo.isCompleted
        );
      return todo.title.includes(searchRef.current?.value);
    });
    console.log(result);
    setfilteredList([...result]);
  };
  return (
    <div className="main-container">
      <h1 className="app-heading">Create Todo's</h1>

      <div className="center-container">
        <Todos addList={addList} />
        <div className="search-box">
          <input
            type="search"
            className="search"
            placeholder="Search Todo's"
            id=""
            ref={searchRef}
            onChange={handleOnSearch}
          />
          <select
            className="status"
            id="status"
            ref={filterRef}
            onChange={handleOnSearch}
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          {/* <button className="button">search</button> */}
        </div>
        <div className="filtered-list">
          {filteredList.map((listItem, i) => {
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
    </div>
  );
}
