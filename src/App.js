import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className="main-container">
      <div className="center-container">
      <h1 className="app-heading">TODO list...</h1>
      <hr style={{marginBottom:'20px'}}/>

        <Todos addList={addList}/>
       
        {listTodo.map((listItem,i)=>{
          console.log(listItem)
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default App;
