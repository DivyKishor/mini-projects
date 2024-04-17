import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../features/todoSlice'
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";



const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
  return (
    <>
        <div>Todos</div>
        {todos.map((todo) => (
            <div key={todo.id} className='flex justify-between'>
                {todo.text}
                <div className='flex'>
                    <MdDelete className="text-red-400" onClick={() => dispatch(deleteTodo(todo))}/>
                    {!todo.completed &&<FaCheck className="text-green-400" onClick={() => dispatch(completeTodo(todo))}/>}
                </div>
            </div>
        )        
        )}
    </>
  )
}

export default Todos
