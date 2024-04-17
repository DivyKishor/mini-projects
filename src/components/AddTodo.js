import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice'
import Todos from './Todos';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
  return (
    <div className='flex flex-col justify-center margin-auto w-72'>
        <form onSubmit={addTodoHandler}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={addTodoHandler}>Add Todo</button>
        </form>
        <Todos />
    </div>
  )
}

export default AddTodo
