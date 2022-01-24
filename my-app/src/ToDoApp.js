import React from 'react';
import './TodoApp.css';
import { useState } from 'react'
export function NewTodoList() {
    const [toDoList, setToDoList] = useState([])
    const [value, setValue] = useState(" ")
    const addTask = () => {
        if (!value)
            return
        let addTask = { id: Date.now(), task: value, isDeleted: false, isCompleted: false }
        setToDoList([...toDoList, addTask])
        setValue("")
    }
    const deleteTask = (id) => {
        setToDoList(toDoList.filter(element => element.id !== id))
    }
    const completeTask = (id) => {
        let cmpTask = toDoList.find(element => element.id === id)
        cmpTask.isCompleted = true
        setToDoList([...toDoList])
    }
    const handleOnChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <div id="div">
        <div className="App">
            <h1 id="heading">Your To Do List</h1>
            <h3 id="heading2">{`Your Pending Task (${toDoList.filter(element => !element.isCompleted).length})`} </h3>
            {toDoList.map(toDoElement => toDoElement.isDeleted === false &&
                <div className="border" style={{ textDecoration: toDoElement.isCompleted === true ? 'line-through' : 'none' }}>
                    <span>{toDoElement.task}</span>
                    <button className="btnComplete" onClick={() => completeTask(toDoElement.id)}>complete</button>
                    <button className="btn" onClick={() => deleteTask(toDoElement.id)}><bold>x</bold></button>
                </div>)}
            <div className="inpDiv">
                <input id="textBox" type="text" value={value} placeholder="Add a new task" onChange={handleOnChange} />
                <button className="b1" onClick={addTask}>Add list</button>
            </div>
        </div>
        </div>
        

    )
}