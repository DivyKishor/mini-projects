import React, {useState, useContext} from 'react';
import {MyContext} from './MyContext';

const IncrementCounter = props=> {
    const [counter, setCounter] = useState(0);
    const { myState, setMyState } = useContext(MyContext);

  const handleClick = () => {
    setMyState('New Value');
  };
  return (
    <>
    <div className='flex justify-center'>
        <button onClick={()=>setCounter(counter-1)} className="focus:ring-blue-600 focus:ring-4 rounded border border-blue-500 p-2 m-2 shadow-lg text-white bg-blue-500 ring-1 hover:bg-blue-600 ">-</button>
      {counter}
        <button onClick={()=>setCounter(counter+1)} className="focus:ring-blue-600 focus:ring-4 rounded border border-blue-500 p-2 m-2 shadow-lg text-white bg-blue-500 ring-1 hover:bg-blue-600 ">+</button>
    </div>
    <p>State from Context: {myState}</p>
    <button onClick={handleClick}>Change State</button>
    </>
  )
}

export default IncrementCounter
