import React, {useEffect, useState} from "react";
import '../App.css'
import Btn from "./Btn";
import { MdDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";



const ToDoList = () => {
    const [isCompleteScreen, setIsCompleteScreen] = useState(false);
    const [allTodos, setAllTodos] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const handleAddTodo =()=>{
        let newTodoItem = {
            title: newTitle,
            description: newDescription,
            isComplete: false
        }

        setAllTodos([...allTodos, newTodoItem]);
        localStorage.setItem('todolist', JSON.stringify([...allTodos, newTodoItem]));
        setNewTitle("");
        setNewDescription("");
    }

    const handleDeleteTodo = (index)=>{
        let newTodos = [...allTodos];
        newTodos.splice(index, 1);
        setAllTodos(newTodos);
        localStorage.setItem('todolist', JSON.stringify(newTodos));
    }

    const handleCompleteTodo = (index)=>{
        let newTodos = [...allTodos];
        newTodos[index].isComplete = true;
        setAllTodos(newTodos);
        localStorage.setItem('todolist', JSON.stringify(newTodos));
    }

    useEffect(()=>{
        if(localStorage.getItem('todolist')){
            let savedTodos = JSON.parse(localStorage.getItem('todolist'));
            if(savedTodos){
                setAllTodos(savedTodos);
            }
        }
    },[]);

    return(
        <div className="">
            <h1>To Do</h1>
            <div className="todo-wrapper">
                <div className="todo-form">
                    <div className="todo-input-item">
                        <label>Title</label>
                        <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}  placeholder="Whats the task title"/>
                    </div>
                    <div className="todo-input-item">
                        <label>Description</label>
                        <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="Whats the task description"/>
                    </div>
                    <div className="todo-input-item">
                        <Btn type="button" onClick={handleAddTodo}>Add</Btn>
                    </div>
                </div>
                <div className="btn-area">
                    <button type="button" className={`secondaryBtn ${isCompleteScreen=== false ? 'active' : ''}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
                    <button type="button" className={`secondaryBtn ${isCompleteScreen ? 'active' : ''}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
                </div>
                {isCompleteScreen === false &&
                <div className="todo-list">
                    {allTodos.filter((item)=>item.isComplete === false).map((item,index) => (
                        <div className="todo-list-item" key={index}>
                            <div className="todo-list-item-content">
                                <h3>{item.title}</h3>
                                <div className="todo-list-item-description">{item.description}</div>
                            </div>
                            <div className="todo-list-item-control">
                                <MdDeleteOutline className="icon-delete" onClick={()=>handleDeleteTodo(index)}/>
                                <FaCheck className="icon-check" onClick={()=>handleCompleteTodo(index)}/>
                            </div>
                        </div>
                    )
                    )}
                    
                </div>
                }
                {isCompleteScreen &&
                <div className="todo-list">
                    {allTodos.filter((item)=>item.isComplete === true).map((item,index) => (
                        <div className="todo-list-item" key={index}>
                            <div className="todo-list-item-content">
                                <h3>{item.title}</h3>
                                <div className="todo-list-item-description">{item.description}</div>
                            </div>
                            <div className="todo-list-item-control">
                                <MdDeleteOutline className="icon-delete" onClick={()=>handleDeleteTodo(index)}/>
                            </div>
                        </div>
                    )
                    )}
                    
                </div>
                }
            </div>
        </div>
    );
}

export default ToDoList;