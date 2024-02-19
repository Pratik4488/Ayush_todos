import React, {useRef, useState} from 'react'

const Todos = (props) => {
    const titleRef=useRef()
    const descRef=useRef()
    const [todo, settodo] = useState({
        title:"",
        date: new Date(),
        desc:"",
        isCompleted:false
    });
    const handleAddTodo = () => {
       
        if (  todo && todo.title && todo.desc) {
           
            props.addList(todo)
            settodo({})
        }
        else{
            alert("Unable to add Todo!")
        }
        titleRef.current.value=""
        descRef.current.value=""
    }
    return (
        <>
            <div className="input-container">
                <input
                    type="text"
                    className="input-box-todo title"
                    placeholder="Enter your task"
                  ref={titleRef}
                    onChange={e => {
                        settodo((pre)=>{
                            pre.title=e.target.value
                            return pre
                        })
                    }}
                    onKeyDown={(e)=>{
                        console.log(e)
                        if(e.keyCode ===13){
                            handleAddTodo()
                        }
                    }}
                />
                <input type="text-area"className="input-box-todo desc"
                    placeholder="Enter your task desc"
                    ref={descRef}
                    onChange={e => {
                        settodo((pre)=>{
                            pre.desc=e.target.value
                            return pre
                        })
                    }}
                    onKeyDown={(e)=>{
                        console.log(e)
                        if(e.keyCode ===13){
                            handleAddTodo()
                        }
                    }} />
                <button className="add-btn"
                    onClick={() => {
                       handleAddTodo()
                    }}>+</button>

            </div>

        </>
    )
}

export default Todos