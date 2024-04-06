import React, {useEffect, useState} from "react";
import '../App.css'
import Btn from "./Btn";
import { MdDeleteOutline } from "react-icons/md";
import { FaCheck } from "react-icons/fa";



/**
 * Function to manage a To Do list including adding, deleting, completing todos.
 * 
 * @return {JSX.Element} The JSX element representing the To Do list.
 */
const ToDoList = () => {
    const [isCompleteScreen, setIsCompleteScreen] = useState(false);
    const [allTodos, setAllTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [error, setError] = useState({});

    const handleAddTodo =()=>{

        if (newTitle === ""){ 
            setError({title: "Title cannot be empty"});
            return;
        }
        setError({});
        let newTodoItem = {
            title: newTitle,
            description: newDescription,
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

    const handleDeleteCompleted = (index)=>{
        let newCompletedTodos = [...completedTodos];
        newCompletedTodos.splice(index, 1);
        setCompletedTodos(newCompletedTodos);
        localStorage.setItem('completedTodos', JSON.stringify(newCompletedTodos));
    }

    const handleCompleteTodo = (index)=>{
        let now = new Date();
        let date = now.getDate();
        let mm = now.getMonth() + 1;
        let yyyy = now.getFullYear();
        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();

        let completedOn = date + '-' + mm + '-' + yyyy + ' at ' + hour + ':' + min + ':' + sec;

        let filteredItem = {
            ...allTodos[index],
            completedOn
        }

        let updatedCompletedTodos = [...completedTodos, filteredItem];
        setCompletedTodos(updatedCompletedTodos);
        localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedTodos));
        handleDeleteTodo(index); //removing this task from todos list
    }

    useEffect(()=>{
        if(localStorage.getItem('todolist')){
            let savedTodos = JSON.parse(localStorage.getItem('todolist'));
            if(savedTodos){
                setAllTodos(savedTodos);
            }
        }
        if(localStorage.getItem('completedTodos')){
            let savedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));
            if(savedCompletedTodos){
                setCompletedTodos(savedCompletedTodos);
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
                        {error.title && <div>{error.title}</div>}
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
                    <button type="button" className={`secondaryBtn ${isCompleteScreen=== false ? 'activeTab' : ''}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
                    <button type="button" className={`secondaryBtn ${isCompleteScreen ? 'activeTab' : ''}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
                </div>
                {isCompleteScreen === false &&
                <div className="todo-list">
                    {allTodos.map((item,index) => (
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
                    {completedTodos.map((item,index) => (
                        <div className="todo-list-item" key={index}>
                            <div className="todo-list-item-content">
                                <h3>{item.title}</h3>
                                <div className="todo-list-item-description">{item.description}</div>
                                <p><small>completed on {item.completedOn}</small></p>
                            </div>
                            <div className="todo-list-item-control">
                                <MdDeleteOutline className="icon-delete" onClick={()=>handleDeleteCompleted(index)}/>
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