import React from 'react'
import { useState,useRef,useEffect} from 'react';

export const ToDoForm = ({ addToDo }) => {
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')
    const handelSubmit = (e) => {
        e.preventDefault()
        if (value) {
            addToDo(value, description);
            setValue('')
            setDescription('')
        }
    }
    const inputTask=useRef(null)
    useEffect(()=>{
        inputTask.current.focus()
    },[])
   

    return (
        <form onSubmit={handelSubmit} className="TodoForm">
            <div className="input-container">

            <div className="form-group">
                <h4 style={{ color: 'white' }} >Task</h4>
                <br />
                <input onChange={(e) => {
                    setValue(e.target.value)
                }} type="text" value={value} ref={inputTask} className="todo-input" placeholder='What is the task today?' />
            </div>
            
            <div className="form-group">
                <h4 style={{ color: 'white' }} >Description</h4>
                <br />
                <input onChange={(e) => {
                    setDescription(e.target.value)
                }} type="text" value={description} className="todo-input" placeholder='What your description?' />
                
                <br />
            </div>
            </div>
            <div className="btn-container">
                <button type="submit" className="todo-btn">
                    Add Task
                </button>
            </div>
        </form>

    )
}
